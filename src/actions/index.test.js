import moxios from 'moxios';
import {getSecretWord} from './index';
describe('getSecret Word',()=>{
    beforeEach(()=>{
        moxios.install();
    });
    afterEach(()=>{
        moxios.uninstall()
    });
    test('Secret word is returned ',()=>{
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:'party'
            });
        });
        getSecretWord()
        .then((secretWord)=>{
            expect(secretWord).toBe('party');
        })
    });
});