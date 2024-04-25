export interface StoreSate {
  contacts: Contact[];
  conversations: Conversation[];
  count: {
    count: number;
    name: string;
  };
  operators: Operator[];
  overview: Overview;
  chats: Chat[];
  messages: Messages;
  loginData: Login;
}

export interface Contact {
  name: string;
  contactNumber: string;
  createdDate: string;
  campaign: string;
}

export interface Conversation {
  TemplateTitle: string;
  SentDay: string;
  Category: '50% Offer';
  Recipients: number;
  NoOfClicks: number;
  Actions: 'Visit Store';
}

export interface Operator {
  name: string;
  platform: string;
}

export interface Overview {
  totalCampaigns: number;
  successfulCampaign: number;
  pending: number;
  failed: number;
}

export interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  unread: number;
  lastActive: string;
}

export interface Messages {
  id: string;
  data: { from: string; to: string }[];
}

export interface Login {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
  profile: string;
  phoneNumber: string;
}
