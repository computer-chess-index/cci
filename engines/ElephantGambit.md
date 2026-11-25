# Engine: ElephantGambit

Author: Ek Alexander Loodin

Home: https://github.com/looak/elephant

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-11-19 | 2493<sub>(+79) | 2823<sub>(+46) | 2882<sub>(+48) |  |
| 1.3.2 | 2026-10-25 | 2414<sub>(+150) | 2777<sub>(+185) | 2834<sub>(+174) |  |
| 1.0.0 | 2026-10-14 | 2264<sub>(-12) | 2592<sub>(+72) | 2660<sub>(+6) |  |
| 0.15.2 | 2026-10-11 | 2276<sub>(+1458) | 2520<sub>(+new) | 2654<sub>(+27) |  |
| 0.15.1 | 2026-10-11 | 818 |  | 2627 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-11-19 | 2541<sub>(+57) | 2784<sub>(+33) | 2888<sub>(+68) |  |
| 1.3.2 | 2026-10-25 | 2484<sub>(+261) | 2751<sub>(+255) | 2820<sub>(+182) |  |
| 1.0.0 | 2026-10-14 | 2223<sub>(-29) | 2496<sub>(-99) | 2638<sub>(+82) |  |
| 0.15.2 | 2026-10-11 | 2252 | 2595 | 2556 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.15.2 | 2026-10-11 | 2252 | 2595 | 2556 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ElephantGambit+<version>&body=###%20Engine%20name%0AElephantGambit%0A%0A###%20Version%0A1.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:38:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.15.2", "1.0.0", "1.3.2", "1.6.0"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2276, 2264, 2414, 2493]
  line "E1: LTC (60.0+0.60s)" [2520, 2592, 2777, 2823]
  line "E1: VLTC (2m24s+1.12s)" [2654, 2660, 2834, 2882]
  line "P1: STC (8.0+0.08s)" [2252, 2223, 2484, 2541]
  line "P1: LTC (60.0+0.60s)" [2595, 2496, 2751, 2784]
  line "P1: VLTC (2m24s+1.12s)" [2556, 2638, 2820, 2888]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2888 | 48 | 136 | 57% | 2828 | 40% |
|  |  | E1 | 2882 | 38 | 212 | 51% | 2876 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2784 | 52 | 120 | 50% | 2784 | 28% |
|  |  | E1 | 2823 | 32 | 300 | 53% | 2797 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2541 | 44 | 168 | 45% | 2584 | 30% |
|  |  | E1 | 2493 | 49 | 128 | 49% | 2504 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2834 | 30 | 364 | 52% | 2817 | 34% |
|  |  | P1 | 2820 | 35 | 260 | 47% | 2850 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2777 | 30 | 356 | 49% | 2782 | 33% |
|  |  | P1 | 2751 | 38 | 232 | 48% | 2772 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2414 | 34 | 292 | 50% | 2411 | 30% |
|  |  | P1 | 2484 | 40 | 212 | 50% | 2485 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2638 | 40 | 208 | 52% | 2628 | 28% |
|  |  | E1 | 2660 | 39 | 232 | 50% | 2666 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2496 | 42 | 186 | 50% | 2512 | 29% |
|  |  | E1 | 2592 | 37 | 254 | 49% | 2592 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2223 | 39 | 236 | 57% | 2168 | 22% |
|  |  | E1 | 2264 | 38 | 256 | 50% | 2255 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2654 | 50 | 132 | 49% | 2665 | 28% |
|  |  | P1 | 2556 | 64 | 82 | 53% | 2523 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2520 | 52 | 122 | 51% | 2502 | 30% |
|  |  | P1 | 2595 | 58 | 104 | 55% | 2535 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2252 | 65 | 90 | 55% | 2191 | 17% |
|  |  | E1 | 2276 | 49 | 156 | 55% | 2157 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2627 | 87 | 48 | 51% | 2606 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1735 | 331 | 16 | 100% | 695 | 0% |
|  |  | E1 | 818 | 341 | 6 | 100% | 252 | 0% |