'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { UserAvatarProfile } from '@/components/user-avatar-profile';
// import { SignOutButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
export function UserNav() {
//   const { user } = useUser();
  const router = useRouter();
  if (true) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
            {/* <UserAvatarProfile user={user} /> */}
            <UserAvatarProfile
                      className='h-8 w-8 rounded-lg'
                      showInfo
                      user={{
                        imageUrl: "/RTR-LOGO.png",
                        fullName: "Chhaya",
                        emailAddresses: [
                            {emailAddress: "it.chhaya@gmail.com"}
                        ]
                      }}
                    />

          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className='w-56'
          align='end'
          sideOffset={10}
          forceMount
        >
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
              <p className='text-sm leading-none font-medium'>
                {/* {user.fullName}
                 */}
                 CHENGCHHEAV
              </p>
              <p className='text-muted-foreground text-xs leading-none'>
                {/* {user.emailAddresses[0].emailAddress}
                 */}
                 CHENGCHHEAV@GMAIL.COM
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => router.push('/dashboard/profile')}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>New Team</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {/* <SignOutButton redirectUrl='/auth/sign-in' /> */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}