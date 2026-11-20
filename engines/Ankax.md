# Engine: Ankax

Author: Amrou Anka

Home: https://github.com/amrouanka/ankax-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2161<sub>(+68) | 2448<sub>(-17) | 2550<sub>(+1) |  |
| 1.0.6 | 2026-11-12 | 2093<sub>(-29) | 2465<sub>(+120) | 2549<sub>(+92) |  |
| 1.0.4 | 2026-11-10 | 2122 | 2345 | 2457 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2167<sub>(+85) | 2410<sub>(-2) | 2508<sub>(+1) |  |
| 1.0.6 | 2026-11-12 | 2082<sub>(+45) | 2412<sub>(+52) | 2507<sub>(+185) |  |
| 1.0.4 | 2026-11-10 | 2037 | 2360 | 2322 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.4 | 2026-11-10 | 2037 | 2360 | 2322 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ankax+<version>&body=###%20Engine%20name%0AAnkax%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-20 05:35:40

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.4", "1.0.6", "1.1.0"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2122, 2093, 2161]
  line "E1: LTC (60.0+0.60s)" [2345, 2465, 2448]
  line "E1: VLTC (2m24s+1.12s)" [2457, 2549, 2550]
  line "P1: STC (8.0+0.08s)" [2037, 2082, 2167]
  line "P1: LTC (60.0+0.60s)" [2360, 2412, 2410]
  line "P1: VLTC (2m24s+1.12s)" [2322, 2507, 2508]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2508 | 54 | 108 | 53% | 2479 | 36% |
|  |  | E1 | 2550 | 50 | 136 | 48% | 2566 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2410 | 66 | 76 | 47% | 2444 | 28% |
|  |  | E1 | 2448 | 48 | 140 | 51% | 2444 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2167 | 54 | 116 | 48% | 2190 | 24% |
|  |  | E1 | 2161 | 45 | 200 | 51% | 2205 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2507 | 51 | 124 | 43% | 2574 | 31% |
|  |  | E1 | 2549 | 50 | 132 | 54% | 2516 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2412 | 49 | 136 | 46% | 2449 | 29% |
|  |  | E1 | 2465 | 48 | 148 | 53% | 2439 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2082 | 49 | 144 | 46% | 2126 | 21% |
|  |  | E1 | 2093 | 45 | 180 | 44% | 2156 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2322 | 43 | 186 | 49% | 2329 | 24% |
|  |  | E1 | 2457 | 41 | 204 | 52% | 2444 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2360 | 49 | 150 | 58% | 2290 | 28% |
|  |  | E1 | 2345 | 41 | 204 | 50% | 2331 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2037 | 47 | 172 | 51% | 1990 | 18% |
|  |  | E1 | 2122 | 42 | 208 | 56% | 2044 | 22% |