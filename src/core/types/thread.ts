export interface Thread {
  id: string;
  poster: string;
  title: string;
  description: string;
  category: string;
  numOfComments: number;
  numOfVotes: number;
  createdAt: string;
}

export const initialThread: Thread = {
  category: '',
  createdAt: '',
  description: '',
  id: '',
  numOfComments: 0,
  numOfVotes: 0,
  poster: '',
  title: '',
};
