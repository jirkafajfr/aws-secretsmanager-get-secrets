describe('Environment Variables Assert', () => {
    it.each([
        ['SAMPLESECRET1', 'SomeSampleSecret1'],
        ['SAMPLESECRET1_ALIAS', 'SomeSampleSecret1'],
        ['_SPECIAL_CHARS_SECRET', 'SomeSampleSecret2'],
        ['_0_SPECIAL_CHARS_SECRET', 'SomeSampleSecret3'],
        ['PREFIXSECRET1', 'PrefixSecret1Value'],
        ['PREFIXSECRET2', 'PrefixSecret2Value'],
    ])('Secret with name %s test', (secretName, expectedValue) => {
        const secretValue = process.env[secretName]
        expect(secretValue).toBeDefined();
        expect(secretValue).toBe(expectedValue);
    });
});