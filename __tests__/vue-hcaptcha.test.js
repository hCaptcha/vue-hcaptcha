import {mount, shallowMount} from '@vue/test-utils';
import VueHcaptcha from '../src/main.js'

/*
 * Test created hook
 */

/*global describe, test, expect, jest*/
/*eslint no-undef: "error"*/

describe('VueHCaptcha', () => {
    test('has a mounted hook', () => {
        expect(typeof VueHcaptcha.mounted).toBe('function')
    })

    test('has a onload function', () => {
        expect(typeof VueHcaptcha.methods.onloadScript).toBe('function')
    })

    test('is Vue instance', () => {
        const wrapper = mount(VueHcaptcha, {
            propsData: {sitekey: "0000"},
            attachToDocument: true
        })
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    test('component has rendered', () => {
        const wrapper = mount(VueHcaptcha, {
            propsData: {sitekey: "0000"},
            attachToDocument: true
        })
        expect(wrapper.element).toMatchSnapshot()
    })

    test('has onError function', () => {
        expect(typeof VueHcaptcha.methods.onError).toBe('function')
    })


    test('has onVerify function', () => {
        expect(typeof VueHcaptcha.methods.onVerify).toBe('function')
    })

    test('has onExpired function', () => {
        expect(typeof VueHcaptcha.methods.onExpired).toBe('function')
    })

    test('has onOpen function', () => {
      expect(typeof VueHcaptcha.methods.onOpen).toBe('function')
   })

    test('has onClose function', () => {
      expect(typeof VueHcaptcha.methods.onClose).toBe('function')
    })

    test('has execute function', () => {
        expect(typeof VueHcaptcha.methods.execute).toBe('function')
    })

    test('has reset function', () => {
        expect(typeof VueHcaptcha.methods.reset).toBe('function')
    })

    test('emits verify', () => {
        const wrapper = shallowMount(VueHcaptcha, {
            propsData: {sitekey: "10000000-ffff-ffff-ffff-000000000001"},
            attachToDocument: true
        })
        // mock the data coming back from the server.
        const response = {success: true}
        // pass to on verify
        wrapper.vm.onVerify(response)
        // check to see if it was emitted
        expect(wrapper.emitted().verify).toBeTruthy()
    })

    test('emits error', () => {
        const wrapper = mount(VueHcaptcha, {
            propsData: {sitekey: "10000000-ffff-ffff-ffff-000000000001"},
            attachToDocument: true
        })
        // mock the data coming back from the server.
        const error = "invalid-input-response"
        // mock reset function
        wrapper.vm.reset = jest.fn()
        // pass to on error
        wrapper.vm.onError(error)
        // check to see if it was emitted
        expect(wrapper.emitted().error).toBeTruthy()
    })

    test('emits error response', () => {
        const wrapper = mount(VueHcaptcha, {
            propsData: {sitekey: "10000000-ffff-ffff-ffff-000000000001"},
            attachToDocument: true
        })
        // mock the data coming back from the server.
        const error = "invalid-input-response"
        // mock reset function
        wrapper.vm.reset = jest.fn()
        // pass to on error
        wrapper.vm.onError(error)
        // check to see if it was emitted
        expect(wrapper.emitted().error[0][0]).toBe(error)
    })
})
