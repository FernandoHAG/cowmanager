let mockedGetList = [
  {
    _id: 16314,
    type: "Antibiótico",
    amount_of_milk_produced: "777",
    farmer: {
      name: "Fazenda do Leo 123",
      city: "Camaçari",
    },
    from: {
      name: "Fazendeiro Alves",
    },
    to: {
      name: "klee",
    },
    number_of_cows_head: "555",
    had_supervision: false,
    location: {
      latitude: -10.3504,
      longitude: -10.0219,
    },
    created_at: "2022-02-01T10:10:21.748Z",
    updated_at: "2023-01-16T17:54:29.607Z",
    __v: 0,
  },
  {
    _id: 21078,
    type: "Antibiótico",
    amount_of_milk_produced: "444",
    farmer: {
      name: "Fazenda Futuro",
      city: "camaçari",
    },
    from: {
      name: "João Alves",
    },
    to: {
      name: "leo alves",
    },
    number_of_cows_head: "444",
    had_supervision: false,
    location: {
      latitude: -10.3504,
      longitude: -10.0219,
    },
    created_at: "2022-02-01T10:10:21.748Z",
    updated_at: "2023-01-15T20:40:29.688Z",
    __v: 0,
  },
  {
    _id: 37615,
    type: "BPA",
    amount_of_milk_produced: "44",
    farmer: {
      name: "Fazenda Futuro",
      city: "Camaçari",
    },
    from: {
      name: "Fazendeiro Alves",
    },
    to: {
      name: "",
    },
    number_of_cows_head: "440",
    had_supervision: false,
    location: {
      latitude: 0,
      longitude: 0,
    },
    created_at: "2022-09-25T00:13:57.000Z",
    updated_at: "2022-09-25T00:13:57.000Z",
    __v: 0,
  },
  {
    _id: 13613,
    type: "BPA",
    amount_of_milk_produced: "57",
    farmer: {
      name: "Leandro alves",
      city: "leolandia",
    },
    from: {
      name: "Leo alves",
    },
    to: {
      name: "",
    },
    number_of_cows_head: "117",
    had_supervision: true,
    location: {
      latitude: -12.642683307420432,
      longitude: -38.09577941894532,
    },
    created_at: "2022-09-26T00:44:24.000Z",
    updated_at: "2022-09-26T00:44:24.000Z",
    __v: 0,
  },
  {
    _id: 7248,
    type: "BPA",
    amount_of_milk_produced: "5000",
    farmer: {
      name: "Fazenda leo alves",
      city: "Bov control",
    },
    from: {
      name: "Fazendeiro Alves",
    },
    to: {
      name: "",
    },
    number_of_cows_head: "50",
    had_supervision: false,
    location: {
      latitude: -13.004557745339769,
      longitude: -38.50708007812501,
    },
    created_at: "2022-10-04T17:08:00.000Z",
    updated_at: "2022-10-04T17:08:00.000Z",
    __v: 0,
  },
  {
    _id: 500,
    type: "BPA",
    amount_of_milk_produced: "100",
    farmer: {
      name: "ci",
      city: "ci",
    },
    from: {
      name: "ci",
    },
    to: {
      name: "Aa",
    },
    number_of_cows_head: "1000",
    had_supervision: false,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2022-12-06T21:28:38.091Z",
    updated_at: "2022-12-06T21:28:38.091Z",
    __v: 0,
  },
  {
    _id: 401,
    type: "BPA",
    amount_of_milk_produced: "2000",
    farmer: {
      name: "vic",
      city: "vic",
    },
    from: {
      name: "vic",
    },
    to: {
      name: "Victor Hugo",
    },
    number_of_cows_head: "1000",
    had_supervision: true,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2022-12-06T22:55:31.719Z",
    updated_at: "2022-12-06T22:55:31.719Z",
    __v: 0,
  },
  {
    _id: 13973,
    type: "Antibiótico",
    amount_of_milk_produced: "400",
    farmer: {
      name: "rock",
      city: "rock",
    },
    from: {
      name: "rock",
    },
    to: {
      name: "Fernando Siqueira",
    },
    number_of_cows_head: "25",
    had_supervision: true,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2022-12-11T22:15:52.100Z",
    updated_at: "2022-12-11T22:15:52.100Z",
    __v: 0,
  },
  {
    _id: 44843,
    type: "BPA",
    amount_of_milk_produced: "480",
    farmer: {
      name: "lock",
      city: "lock",
    },
    from: {
      name: "lock",
    },
    to: {
      name: "Fernando Siqueira",
    },
    number_of_cows_head: "25",
    had_supervision: true,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2022-12-12T03:15:45.113Z",
    updated_at: "2022-12-12T03:15:45.113Z",
    __v: 0,
  },
  {
    _id: 4110,
    type: "BPA",
    amount_of_milk_produced: "10",
    farmer: {
      name: "nova",
      city: "nova",
    },
    from: {
      name: "Nova checklist",
    },
    to: {
      name: "Nova checklist",
    },
    number_of_cows_head: "1000",
    had_supervision: false,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2022-12-13T06:14:35.252Z",
    updated_at: "2022-12-13T06:14:35.252Z",
    __v: 0,
  },
  {
    _id: 77281,
    type: "BPA",
    amount_of_milk_produced: "10",
    farmer: {
      name: "nova",
      city: "nova",
    },
    from: {
      name: "Nova checklist",
    },
    to: {
      name: "Nova checklist",
    },
    number_of_cows_head: "1000",
    had_supervision: false,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2022-12-13T06:14:35.252Z",
    updated_at: "2022-12-13T06:14:35.252Z",
    __v: 0,
  },
  {
    _id: 16314,
    type: "Antibiótico",
    amount_of_milk_produced: "777",
    farmer: {
      name: "Fazenda do Leo 123",
      city: "Camaçari",
    },
    from: {
      name: "Fazendeiro Alves",
    },
    to: {
      name: "klee",
    },
    number_of_cows_head: "555",
    had_supervision: false,
    location: {
      latitude: -10.3504,
      longitude: -10.0219,
    },
    created_at: "2022-02-01T10:10:21.748Z",
    updated_at: "2023-01-16T17:54:29.607Z",
    __v: 0,
  },
  {
    _id: 21078,
    type: "Antibiótico",
    amount_of_milk_produced: "444",
    farmer: {
      name: "Fazenda Futuro",
      city: "camaçari",
    },
    from: {
      name: "João Alves",
    },
    to: {
      name: "leo alves",
    },
    number_of_cows_head: "444",
    had_supervision: false,
    location: {
      latitude: -10.3504,
      longitude: -10.0219,
    },
    created_at: "2022-02-01T10:10:21.748Z",
    updated_at: "2023-01-15T20:40:29.688Z",
    __v: 0,
  },
  {
    _id: 37615,
    type: "BPA",
    amount_of_milk_produced: "44",
    farmer: {
      name: "Fazenda Futuro",
      city: "Camaçari",
    },
    from: {
      name: "Fazendeiro Alves",
    },
    to: {
      name: "",
    },
    number_of_cows_head: "440",
    had_supervision: false,
    location: {
      latitude: 0,
      longitude: 0,
    },
    created_at: "2022-09-25T00:13:57.000Z",
    updated_at: "2022-09-25T00:13:57.000Z",
    __v: 0,
  },
  {
    _id: 13613,
    type: "BPA",
    amount_of_milk_produced: "57",
    farmer: {
      name: "Leandro alves",
      city: "leolandia",
    },
    from: {
      name: "Leo alves",
    },
    to: {
      name: "",
    },
    number_of_cows_head: "117",
    had_supervision: true,
    location: {
      latitude: -12.642683307420432,
      longitude: -38.09577941894532,
    },
    created_at: "2022-09-26T00:44:24.000Z",
    updated_at: "2022-09-26T00:44:24.000Z",
    __v: 0,
  },
  {
    _id: 7248,
    type: "BPA",
    amount_of_milk_produced: "5000",
    farmer: {
      name: "Fazenda leo alves",
      city: "Bov control",
    },
    from: {
      name: "Fazendeiro Alves",
    },
    to: {
      name: "",
    },
    number_of_cows_head: "50",
    had_supervision: false,
    location: {
      latitude: -13.004557745339769,
      longitude: -38.50708007812501,
    },
    created_at: "2022-10-04T17:08:00.000Z",
    updated_at: "2022-10-04T17:08:00.000Z",
    __v: 0,
  },
  {
    _id: 500,
    type: "BPA",
    amount_of_milk_produced: "100",
    farmer: {
      name: "ci",
      city: "ci",
    },
    from: {
      name: "ci",
    },
    to: {
      name: "Aa",
    },
    number_of_cows_head: "1000",
    had_supervision: false,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2022-12-06T21:28:38.091Z",
    updated_at: "2022-12-06T21:28:38.091Z",
    __v: 0,
  },
  {
    _id: 401,
    type: "BPA",
    amount_of_milk_produced: "2000",
    farmer: {
      name: "vic",
      city: "vic",
    },
    from: {
      name: "vic",
    },
    to: {
      name: "Victor Hugo",
    },
    number_of_cows_head: "1000",
    had_supervision: true,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2022-12-06T22:55:31.719Z",
    updated_at: "2022-12-06T22:55:31.719Z",
    __v: 0,
  },
  {
    _id: 13973,
    type: "Antibiótico",
    amount_of_milk_produced: "400",
    farmer: {
      name: "rock",
      city: "rock",
    },
    from: {
      name: "rock",
    },
    to: {
      name: "Fernando Siqueira",
    },
    number_of_cows_head: "25",
    had_supervision: true,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2022-12-11T22:15:52.100Z",
    updated_at: "2022-12-11T22:15:52.100Z",
    __v: 0,
  },
  {
    _id: 44843,
    type: "BPA",
    amount_of_milk_produced: "480",
    farmer: {
      name: "lock",
      city: "lock",
    },
    from: {
      name: "lock",
    },
    to: {
      name: "Fernando Siqueira",
    },
    number_of_cows_head: "25",
    had_supervision: true,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2022-12-12T03:15:45.113Z",
    updated_at: "2022-12-12T03:15:45.113Z",
    __v: 0,
  },
  {
    _id: 4110,
    type: "BPA",
    amount_of_milk_produced: "10",
    farmer: {
      name: "nova",
      city: "nova",
    },
    from: {
      name: "Nova checklist",
    },
    to: {
      name: "Nova checklist",
    },
    number_of_cows_head: "1000",
    had_supervision: false,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2022-12-13T06:14:35.252Z",
    updated_at: "2022-12-13T06:14:35.252Z",
    __v: 0,
  },
  {
    _id: 77281,
    type: "BPA",
    amount_of_milk_produced: "10",
    farmer: {
      name: "nova",
      city: "nova",
    },
    from: {
      name: "Nova checklist",
    },
    to: {
      name: "Nova checklist",
    },
    number_of_cows_head: "1000",
    had_supervision: false,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2022-12-13T06:14:35.252Z",
    updated_at: "2022-12-13T06:14:35.252Z",
    __v: 0,
  },
];

export default mockedGetList;
