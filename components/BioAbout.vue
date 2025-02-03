<script setup>

</script>
<template>
   <section class="bio section- light" data-watch="navigator" data-scroll-section>
        <div class="bio__top-line"></div>
        <div class="bio__container container-small-s">
            <div class="bio__wrapper">
                <!-- max-width: $mobile  START -->
                <div class="body-bio__header min-width-bio">
                    <h1 class="body-bio__title">Aleh Vaitulevich</h1>
                    <h2 class="body-bio__subtitle">{{ $t('bio.title') }}</h2>
                </div>
                <!-- max-width: $mobile  END -->
                <aside class="bio__collumn collumn-bio">
                <div class="collumn-bio__top">
                    <div class="collumn-bio__image">
                        <img class="ibg" src="@/assets/images/about_ja.jpg" alt="avatar">
                    </div>
                    <div class="collumn-bio__links links-collumn-bio">
                        <h3 class="collumn-bio__title block-title">{{ $t('bio.contacts') }}</h3>
                        <ul class="links-collumn-bio__wrapper">
                            <li class="links-collumn-bio__state icon-Home">{{ $t('bio.location') }}</li>
                            <li><a href="tel:+48780132019" class="links-collumn-bio__link icon-iPhone">+48 780 132 019</a></li>
                            <li><a href="mailto:vaitulevichaleh@gmail.com" class="links-collumn-bio__link icon-Mail">vaitulevichaleh@gmail.com</a></li>
                            <li><a href="https://github.com/OlegWajtulewicz" target="_blank" class="links-collumn-bio__link icon-github">GitHub</a></li>
                            <li class="hello__links links-bio">
                                <a href="https://codeium.com/profile/robustly-on-wallaroo-38491" target="_blank" class="hello__link-1 ">
                                        <img class="ibg" src="@/assets/images/icons/codeium.svg" alt="FP">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="collumn-bio__bottom">
                    <div class="collumn-bio__skills skills-bio">
                        <h3 class="collumn-bio__title block-title">{{ $t('bio.skills') }}</h3>
                        <div class="skills-bio__title">HTML & CSS / SCSS </div>
                        <div class="skills-bio__title">JS / TS / jQuery </div>
                        <div class="skills-bio__title">BEM  </div>
                        <div class="skills-bio__title">Gulp / Webpack </div>
                        <div class="skills-bio__title">Git / GitHub </div>
                        <div class="skills-bio__title">GSAP Animations </div>
                        <div class="skills-bio__title">Barba.js Animations </div>
                        <div class="skills-bio__title">TailwindCSS + ShadCN </div>
                        <div class="skills-bio__title">Vue  </div>
                        <div class="skills-bio__title">Next JS  </div>
                        <div class="skills-bio__subtitle line-height">Parallel Routes / Group Routes / Server Actions / API</div>
                        <div class="skills-bio__title">Zustand  </div>
                        <div class="skills-bio__title">Prisma + PostgreSQL </div>
                        <div class="skills-bio__title">NextAuth  </div>
                        <div class="skills-bio__title">Resend  </div>
                    </div>
                    <h3 class="collumn-bio__title block-title">{{ $t('bio.education') }}</h3>
                    <div class="collumn-bio__skills skills-bio">
                        <p>2023</p>
                        <div class="skills-bio__title">Udemy </div>
                        <a href="https://www.udemy.com/certificate/UC-8f71cc46-e553-421b-8f52-d1e4eab0092d/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email" class="skills-bio__subtitle" data-lang="mag"><span>WEB developer</span></a>
                    </div>
                    <div class="collumn-bio__skills skills-bio">
                        <p>2022-2023</p>
                        <div class="skills-bio__title">Udemy </div>
                        <div class="skills-bio__subtitle line-height">Design and development of websites</div>
                    </div>
                    <div class="collumn-bio__skills skills-bio">
                        <p>2005-2005</p>
                        <div class="skills-bio__title">Belarusian State University of Culture and Arts
                            </div>
                        <div class="skills-bio__subtitle line-height">Bachelor of Arts (BA), Instrumental music, Percussion instruments
                            2000-2005</div>
                    </div>
                    <h3 class="collumn-bio__title block-title">{{ $t('bio.other') }}</h3>
                    <div class="skills-bio__title">{{ $t('bio.languages') }}</div>
                    <div class="skills-bio__subtitle">{{ $t('bio.languages_level') }}</div>
                    <div class="skills-bio__title">{{ $t('bio.license') }}</div>
                </div>
                </aside>
                <div class="bio__body body-bio">
                    <!-- min-width: $mobile  START -->
                    <div class="body-bio__header max-width-bio">
                        <h1 class="body-bio__title">Aleh Vaitulevich</h1>
                        <h2 class="body-bio__subtitle">{{ $t('bio.title') }}</h2>
                    </div> 
                    <!-- min-width: $mobile  END -->
                <h3 class="body-bio__title--block block-title">{{ $t('bio.experience') }}</h3>
                <div class="collumn-bio__skills skills-bio">
                    <p>2022 - {{ $t('bio.present') }}</p>
                    <div class="skills-bio__title">{{ $t('bio.frontend_dev') }}</div>
                    <div class="skills-bio__subtitle">{{ $t('bio.partnership') }}</div>
                    <div class="collumn-bio__title-film icon-Mark">«KIWI Marketing» Poland</div>
                    <div class="collumn-bio__title-film icon-Mark">«Maisa Studio» Poland</div>
                    <div class="collumn-bio__title-film icon-Mark">«BlackWhiteJazz» Poland</div>
                    <div class="collumn-bio__title-film icon-Mark">ООО «БЭИЛКАР» Belarus</div>
                    <div class="collumn-bio__title-film icon-Mark">«ШикАвто» Belarus</div>
                </div>

                <div class="collumn-bio__skills skills-bio">
                    <p>2021 - {{ $t('bio.present') }}</p>
                    <div class="skills-bio__title">Jermakow Music</div>
                    <div class="skills-bio__subtitle">{{ $t('bio.drummer') }}</div>
                </div>

                <div class="collumn-bio__skills skills-bio">
                    <p>2013 - {{ $t('bio.present') }}</p>
                    <div class="skills-bio__title">{{ $t('bio.session_musician') }}</div>
                    <div class="collumn-bio__title-film icon-Mark">{{ $t('bio.drummer_perc') }}</div>
                    <div class="skills-bio__subtitle">{{ $t('bio.concert_activity') }}</div>
                </div>

                <div class="collumn-bio__skills skills-bio">
                    <p>2007 - 2013</p>
                    <div class="skills-bio__title">{{ $t('bio.guard_orchestra') }}</div>
                    <div class="collumn-bio__title-film icon-Mark">{{ $t('bio.orchestral_artist') }}</div>
                    <div class="skills-bio__subtitle">{{ $t('bio.percussion_instruments') }}</div>
                </div>

                <div class="collumn-bio__skills skills-bio">
                    <p>2005 - 2006</p>
                    <div class="skills-bio__title">{{ $t('bio.music_theater') }}</div>
                    <div class="collumn-bio__title-film icon-Mark">{{ $t('bio.orchestral_artist') }}</div>
                    <div class="skills-bio__subtitle">{{ $t('bio.percussion_instruments') }}</div>
                </div>

                <div class="collumn-bio__skills skills-bio">
                    <p>2003 - 2005</p>
                    <div class="skills-bio__title">{{ $t('bio.comprehensive_school') }}</div>
                    <div class="collumn-bio__title-film icon-Mark">{{ $t('bio.percussion_teacher') }}</div>
                </div>

                <!-- Образование -->
                <div class="skills-bio__title">{{ $t('bio.university') }}</div>
                <div class="skills-bio__subtitle line-height">{{ $t('bio.bachelor') }}</div>

                </div>
            </div>
            <div class="bio__footer">
                <div class="bio__zgoda">
                    {{ $t('bio.consent') }}
                </div>
            </div>
        </div>
        <div class="bio__bottom-line"></div>	
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/bio-about';
</style> 