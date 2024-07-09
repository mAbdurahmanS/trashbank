import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Button } from "@/Components/ui/button";
import { File, ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

const cards = [
    {
        title: "Gas LPG 3 kg",
        point: "25.000",
        url: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/4/3/689d41de-7c3d-4163-8913-6f3fa8101206.jpg",
    },
    {
        title: "Minyak 1 liter",
        point: "15.000",
        url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//100/MTA-27912268/br-m036969-03858_minyak-goreng-bimoli-1liter-pouch_full01.jpg",
    },
    {
        title: "Beras 10 kg",
        point: "14.000",
        url: "https://cdn.antaranews.com/cache/1200x800/2021/01/22/rice-3997767_1920.jpg",
    },
    {
        title: "Indomie 1 dus",
        point: "85.000",
        url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-2583228/indomie_indomie-goreng-mie-instan--85g--_full02.jpg",
    },
    {
        title: "Telor 1 kg",
        point: "25.000",
        url: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/9/3e34492a-5e6d-4605-9608-69ca1839d588.jpg",
    },
    {
        title: "Kecap 500 ml",
        point: "23.000",
        url: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/3/8/dfbe4fab-11be-46fd-8422-de3151e35f85.jpg",
    },
    {
        title: "Gula 1kg",
        point: "22.000",
        url: "https://id-live-01.slatic.net/p/2d47f4976de738381b2e93cc7bcf3732.jpg",
    },
    {
        title: "Kompor",
        point: "335.000",
        url: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/5/76e93b78-5d8c-4bd6-bf3e-18737d6ae122.jpg",
    },
    {
        title: "Motor",
        point: "27.0000.000",
        url: "https://www.wahanahonda.com/assets/upload/produk/varian_warna/15/PRODUK_VARIAN-WARNA_15_04-02-2024_65be712821333.webp",
    },
];

type CardProps = React.ComponentProps<typeof Card>;

export default function Insentif({ auth, totalPoints }: any) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Insentif
                </h2>
            }
        >
            <Head title="Insentif" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <h1 className=" text-xl font-bold mb-4">
                        Point Anda: {totalPoints}
                    </h1>
                    <div className="grid grid-cols-3 gap-6">
                        {cards.map((item: any, index: any) => (
                            <Card className="w-[380px]" key={index}>
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>
                                        {item.point} Point
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    <img
                                        alt={item.title}
                                        className="aspect-square object-cover w-full h-[300px]"
                                        src={item.url}
                                    />
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Tukar</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
