import { createLazyFileRoute } from '@tanstack/react-router';
import Home from '@/modules/Home';

export const Route = createLazyFileRoute('/_root-layout/')({
    component: Home,
});
