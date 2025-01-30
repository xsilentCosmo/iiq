function Gallery() {
    return (
        <section className="pt-20 bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white bg-green-500">
            <div className="max-w-screen mx-auto px-0">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold text-white mb-4">Our Work in Focus</h2>
                    <p className="text-lg text-gray-200">
                        Take a glimpse at some of our featured highlights and achievements.
                    </p>
                </div>

                {/* Creative Layout */}
                <div className="relative pb-16">
                    {/* Placeholder Images */}

                    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://img.freepik.com/free-photo/start-up-business-goals-strategy_53876-124798.jpg?semt=ais_incoming" />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241198.jpg?semt=ais_incoming" />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://img.freepik.com/free-photo/business-meeting-modern-office_9975-22680.jpg?semt=ais_incoming" />
                                </div>
                            </div>
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://img.freepik.com/free-photo/sales-manager-creates-presentation-pitch-new-strategy-development_482257-91026.jpg?semt=ais_incoming" />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://img.freepik.com/free-photo/infrastructure-construction-chip-link-concept_53876-124761.jpg?semt=ais_incominghttps://img.freepik.com/free-photo/infrastructure-construction-chip-link-concept_53876-124761.jpg?semt=ais_incoming" />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="https://img.freepik.com/free-photo/picture-serious-executive-office-workers-doing-their-job-board-room-officeinterior-business-people-working-round-table-office-business-plan-business-project-concepts_549566-848.jpg?semt=ais_incoming" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Overlay CTA */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-transparent via-black/50 to-black/70 text-center p-8">
                        <h3 className="text-3xl font-semibold mb-4 text-white">Explore Our Gallery</h3>
                        <p className="text-lg text-gray-300 mb-6">
                            Discover more of what we’ve accomplished through our creative projects.
                        </p>
                        <a
                            href="/gallery"
                            className="inline-block px-6 py-3 bg-[#91e0ed] text-[#1b2a36] font-semibold rounded-lg shadow-md hover:bg-[#6dc2d6] transition-all"
                        >
                            View Gallery
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
