# Engine: ElephantGambit

Author: Ek Alexander Loodin

Home: https://github.com/looak/elephant

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-11-19 | 2518<sub>(+103) | 2823<sub>(+55) | 2894<sub>(+62) |  |
| 1.3.2 | 2026-10-25 | 2415<sub>(+154) | 2768<sub>(+179) | 2832<sub>(+174) |  |
| 1.0.0 | 2026-10-14 | 2261<sub>(-12) | 2589<sub>(+70) | 2658<sub>(+5) |  |
| 0.15.2 | 2026-10-11 | 2273<sub>(+1455) | 2519<sub>(+new) | 2653<sub>(+27) |  |
| 0.15.1 | 2026-10-11 | 818 |  | 2626 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-11-19 | 2543<sub>(+72) | 2809<sub>(+73) | 2855<sub>(+55) |  |
| 1.3.2 | 2026-10-25 | 2471<sub>(+261) | 2736<sub>(+256) | 2800<sub>(+178) |  |
| 1.0.0 | 2026-10-14 | 2210<sub>(-30) | 2480<sub>(-97) | 2622<sub>(+84) |  |
| 0.15.2 | 2026-10-11 | 2240 | 2577 | 2538 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.15.2 | 2026-10-11 | 2240 | 2577 | 2538 |  |
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

Generated: 2026-11-22 05:38:01

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.15.2", "1.0.0", "1.3.2", "1.6.0"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2273, 2261, 2415, 2518]
  line "E1: LTC (60.0+0.60s)" [2519, 2589, 2768, 2823]
  line "E1: VLTC (2m24s+1.12s)" [2653, 2658, 2832, 2894]
  line "P1: STC (8.0+0.08s)" [2240, 2210, 2471, 2543]
  line "P1: LTC (60.0+0.60s)" [2577, 2480, 2736, 2809]
  line "P1: VLTC (2m24s+1.12s)" [2538, 2622, 2800, 2855]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2855 | 60 | 88 | 58% | 2782 | 39% |
|  |  | E1 | 2894 | 43 | 168 | 53% | 2869 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2809 | 159 | 12 | 54% | 2772 | 25% |
|  |  | E1 | 2823 | 34 | 272 | 54% | 2790 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2543 | 49 | 136 | 46% | 2574 | 31% |
|  |  | E1 | 2518 | 52 | 112 | 52% | 2502 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2832 | 30 | 360 | 52% | 2815 | 34% |
|  |  | P1 | 2800 | 35 | 256 | 47% | 2832 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2736 | 38 | 232 | 48% | 2757 | 33% |
|  |  | E1 | 2768 | 31 | 344 | 48% | 2781 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2471 | 40 | 208 | 50% | 2471 | 27% |
|  |  | E1 | 2415 | 35 | 268 | 50% | 2408 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2622 | 40 | 208 | 52% | 2611 | 28% |
|  |  | E1 | 2658 | 39 | 232 | 50% | 2665 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2480 | 42 | 186 | 50% | 2498 | 29% |
|  |  | E1 | 2589 | 37 | 254 | 49% | 2589 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2210 | 39 | 236 | 57% | 2155 | 22% |
|  |  | E1 | 2261 | 38 | 256 | 50% | 2253 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2538 | 64 | 82 | 53% | 2506 | 28% |
|  |  | E1 | 2653 | 50 | 132 | 49% | 2664 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2577 | 58 | 104 | 55% | 2516 | 28% |
|  |  | E1 | 2519 | 52 | 122 | 51% | 2500 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2240 | 65 | 90 | 55% | 2178 | 17% |
|  |  | E1 | 2273 | 49 | 156 | 55% | 2155 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2626 | 87 | 48 | 51% | 2604 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1727 | 331 | 16 | 100% | 694 | 0% |
|  |  | E1 | 818 | 341 | 6 | 100% | 251 | 0% |