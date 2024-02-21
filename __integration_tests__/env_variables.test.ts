describe('Environment Variables Assert', () => {
    it.each([
        ['SAMPLESECRET1', 'SomeSampleSecret1'],
        ['SAMPLESECRET1_ALIAS', 'SomeSampleSecret1'],
        ['_SPECIAL_CHARS_SECRET', 'SomeSampleSecret2'],
        ['_0_SPECIAL_CHARS_SECRET', 'SomeSampleSecret3'],
        ['PREFIXSECRET1', 'PrefixSecret1Value'],
        ['PREFIXSECRET2', 'PrefixSecret2Value'],
        ['JSONSECRET_API_USER', 'user'],
        ['JSONSECRET_API_KEY', 'key'],
        ['JSONSECRET_CONFIG_ACTIVE', 'true'],
    ])('Secret with name %s test', (secretName, expectedValue) => {
        const secretValue = process.env[secretName];
        expect(secretValue).toBe(expectedValue);
    });
});