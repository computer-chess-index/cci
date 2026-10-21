# Engine: Raphael

Author: Rei Meguro

Home: https://github.com/Orbital-Web/Raphael

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-06-27 | 3390 | 3607 | 3672 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-06-27 | 3521 | 3733 | 3754 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-06-27 | 3405<sub>(+3) | 3555<sub>(+40) | 3571<sub>(+16) |  |
| 4.1.0 | 2026-05-17 | 3402<sub>(+34) | 3515<sub>(+23) | 3555<sub>(+23) |  |
| 4.0.0 | 2026-04-26 | 3368<sub>(+33) | 3492<sub>(+10) | 3532<sub>(+11) |  |
| 3.3.0 | 2026-04-06 | 3335<sub>(+95) | 3482<sub>(+96) | 3521<sub>(+68) |  |
| 3.2.0 | 2026-03-19 | 3240<sub>(+113) | 3386<sub>(+89) | 3453<sub>(+104) |  |
| 3.1.0 | 2026-03-01 | 3127<sub>(+316) | 3297<sub>(+254) | 3349<sub>(+235) |  |
| 3.0.0 | 2026-02-12 | 2811<sub>(+239) | 3043<sub>(+127) | 3114<sub>(+149) |  |
| 2.3.0 | 2026-01-26 | 2572<sub>(+52) | 2916<sub>(+135) | 2965<sub>(+84) |  |
| 2.2.0 | 2026-01-08 | 2520<sub>(+209) | 2781<sub>(+279) | 2881<sub>(+267) |  |
| 2.1.0 | 2026-01-01 | 2311<sub>(+185) | 2502<sub>(+139) | 2614<sub>(+276) |  |
| 2.0.0 | 2025-12-23 | 2126 | 2363 | 2338 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Raphael+<version>&body=###%20Engine%20name%0ARaphael%0A%0A###%20Version%0A4.2.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-21 04:42:16

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0", "2.2.0", "2.3.0", "3.0.0", "3.1.0", "3.2.0", "3.3.0", "4.0.0", "4.1.0", "4.2.0"]
  y-axis "Elo Rating" 2100 --> 3600
  line "T1: STC (8.0+0.08s)" [2126, 2311, 2520, 2572, 2811, 3127, 3240, 3335, 3368, 3402, 3405]
  line "T1: LTC (60.0+0.60s)" [2363, 2502, 2781, 2916, 3043, 3297, 3386, 3482, 3492, 3515, 3555]
  line "T1: VLTC (2m24s+1.12s)" [2338, 2614, 2881, 2965, 3114, 3349, 3453, 3521, 3532, 3555, 3571]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3754 | 42 | 124 | 50% | 3757 | 91% |
|  |  | E1 | 3672 | 35 | 180 | 51% | 3669 | 89% |
|  |  | T1 | 3571 | 25 | 354 | 50% | 3569 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3607 | 31 | 250 | 48% | 3622 | 80% |
|  |  | T1 | 3555 | 23 | 438 | 51% | 3546 | 84% |
|  |  | P1 | 3733 | 41 | 134 | 49% | 3737 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3390 | 29 | 308 | 46% | 3416 | 64% |
|  |  | T1 | 3405 | 26 | 364 | 49% | 3410 | 72% |
|  |  | P1 | 3521 | 33 | 226 | 49% | 3529 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3555 | 27 | 310 | 50% | 3557 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3515 | 28 | 304 | 51% | 3510 | 84% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3402 | 28 | 322 | 49% | 3410 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3532 | 27 | 318 | 50% | 3532 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3492 | 27 | 324 | 50% | 3492 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3368 | 27 | 344 | 50% | 3371 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3521 | 26 | 338 | 50% | 3524 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3482 | 26 | 346 | 52% | 3470 | 84% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3335 | 26 | 364 | 52% | 3317 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3453 | 26 | 354 | 51% | 3449 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3386 | 25 | 388 | 53% | 3367 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3240 | 26 | 376 | 49% | 3248 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3349 | 29 | 304 | 52% | 3335 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3297 | 31 | 270 | 51% | 3287 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3127 | 33 | 260 | 50% | 3123 | 54% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3114 | 33 | 268 | 49% | 3124 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3043 | 30 | 332 | 48% | 3055 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2811 | 35 | 244 | 50% | 2813 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2965 | 40 | 188 | 50% | 2963 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2916 | 35 | 240 | 49% | 2925 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2572 | 41 | 196 | 50% | 2574 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2881 | 36 | 254 | 53% | 2851 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2781 | 40 | 196 | 52% | 2768 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2520 | 41 | 202 | 50% | 2514 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2614 | 47 | 140 | 52% | 2591 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2502 | 45 | 164 | 50% | 2500 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2311 | 48 | 142 | 51% | 2304 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2338 | 41 | 196 | 50% | 2363 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2363 | 50 | 130 | 48% | 2377 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2126 | 49 | 138 | 49% | 2136 | 31% |