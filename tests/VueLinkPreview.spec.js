import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import VueLinkPreview from '../src/VueLinkPreview.vue';
import flushPromises from 'flush-promises';

describe('VueLinkPreview.vue', () => {
    it('renders loader initially', async () => {
        const wrapper = mount(VueLinkPreview, {
            propsData: { url: 'https://example.com' },
        });

        await wrapper.vm.$nextTick(); // Wait for mounted and loading to turn true

        expect(wrapper.find('.link-preview-section').exists()).toBe(true);
        expect(wrapper.find('.link-url-loader').exists()).toBe(true);
    });

    it('renders correct link preview data on load', async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({
                    title: 'Example Domain',
                    description: 'This domain is for use in illustrative examples in documents.',
                    domain: 'example.com',
                    img: 'https://example.com/image.jpg'
                })
            })
        );
        const wrapper = mount(VueLinkPreview, {
            propsData: { url: 'https://example.com' },
        });

        await flushPromises();

        expect(wrapper.vm.preview).toEqual({
             title: 'Example Domain',
             description: 'This domain is for use in illustrative examples in documents.',
             domain: 'example.com',
             img: 'https://example.com/image.jpg'
        });

        expect(wrapper.find('.link-title').text()).toBe('Example Domain');
        expect(wrapper.findAll('.link-description').at(1).text()).toBe('This domain is for use in illustrative examples in documents.');
        expect(wrapper.find('.link-url').text()).toBe('example.com');
        expect(wrapper.find('img').attributes('src')).toBe('https://example.com/image.jpg');
    });

     it('emits click event on card click', async () => {
         global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({
                    title: 'Example Domain',
                    description: 'This domain is for use in illustrative examples in documents.',
                    domain: 'example.com',
                    img: 'https://example.com/image.jpg'
                })
            })
        );

        window.open = vi.fn();
        const wrapper = mount(VueLinkPreview, {
             propsData: { url: 'https://example.com' },
        });
        await flushPromises();

        await wrapper.find('.link-preview-section').trigger('click');

        expect(wrapper.emitted().click).toBeTruthy();
        expect(wrapper.emitted().click[0]).toEqual([{
             title: 'Example Domain',
             description: 'This domain is for use in illustrative examples in documents.',
             domain: 'example.com',
             img: 'https://example.com/image.jpg'
        }]);

        expect(window.open).toHaveBeenCalledWith('https://example.com', '_blank');
     });

    it('does not open window if canOpenLink is false', async () => {
         global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({
                    title: 'Example Domain',
                    description: 'This domain is for use in illustrative examples in documents.',
                    domain: 'example.com',
                    img: 'https://example.com/image.jpg'
                })
            })
        );
        window.open = vi.fn();

        const wrapper = mount(VueLinkPreview, {
             propsData: { url: 'https://example.com', canOpenLink: false },
        });

        await flushPromises();

        await wrapper.find('.link-preview-section').trigger('click');
        expect(window.open).not.toHaveBeenCalled();
    });
});
