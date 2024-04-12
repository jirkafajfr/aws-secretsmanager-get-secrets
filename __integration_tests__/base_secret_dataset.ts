export const BASE_SECRET_DATASET = [
    // Standard name qualified test
    ['SampleSecret1', 'SomeSampleSecret1'],
    // Special characters escaping test
    ['_Special_Chars_Secret', 'SomeSampleSecret2'],
    // Secret starting with numerical character escape test
    ['0_Special_Chars_Secret', 'SomeSampleSecret3'],
    // Prefix matching test
    ['PrefixSecret1', 'PrefixSecret1Value'],
    ['PrefixSecret2', 'PrefixSecret2Value'],
    // Json value expansion
    ['JsonSecret_API_USER', 'user'],
    ['JsonSecret_API_KEY', 'key'],
    ['JsonSecret_CONFIG_ACTIVE', 'true'],
]