# Engine: ElephantGambit

Author: Ek Alexander Loodin

Home: https://github.com/looak/elephant

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2460<sub>(+162) | 2835<sub>(+182) | 2880<sub>(+172) |  |
| 1.0.0 | 2026-10-14 | 2298<sub>(-21) | 2653<sub>(+81) | 2708<sub>(-3) |  |
| 0.15.2 | 2026-10-11 | 2319<sub>(+1482) | 2572<sub>(+new) | 2711<sub>(+30) |  |
| 0.15.1 | 2026-10-11 | 837 |  | 2681 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2608<sub>(+347) | 2885<sub>(+293) | 2965<sub>(+214) |  |
| 1.0.0 | 2026-10-14 | 2261<sub>(-75) | 2592<sub>(-107) | 2751<sub>(+89) |  |
| 0.15.2 | 2026-10-11 | 2336 | 2699 | 2662 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.15.2 | 2026-10-11 | 2336 | 2699 | 2662 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ElephantGambit+<version>&body=###%20Engine%20name%0AElephantGambit%0A%0A###%20Version%0A1.3.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-03 05:38:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.15.2", "1.0.0", "1.3.2"]
  y-axis "Elo Rating" 2200 --> 3000
  line "E1: STC (8.0+0.08s)" [2319, 2298, 2460]
  line "E1: LTC (60.0+0.60s)" [2572, 2653, 2835]
  line "E1: VLTC (2m24s+1.12s)" [2711, 2708, 2880]
  line "P1: STC (8.0+0.08s)" [2336, 2261, 2608]
  line "P1: LTC (60.0+0.60s)" [2699, 2592, 2885]
  line "P1: VLTC (2m24s+1.12s)" [2662, 2751, 2965]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2965 | 44 | 160 | 51% | 2957 | 39% |
|  |  | E1 | 2880 | 39 | 210 | 55% | 2835 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2885 | 50 | 128 | 48% | 2901 | 34% |
|  |  | E1 | 2835 | 37 | 228 | 48% | 2850 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2460 | 42 | 180 | 49% | 2469 | 31% |
|  |  | P1 | 2608 | 54 | 116 | 53% | 2581 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2751 | 45 | 168 | 54% | 2728 | 27% |
|  |  | E1 | 2708 | 40 | 208 | 50% | 2708 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2592 | 49 | 142 | 49% | 2628 | 28% |
|  |  | E1 | 2653 | 40 | 216 | 50% | 2654 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2261 | 47 | 156 | 54% | 2229 | 27% |
|  |  | E1 | 2298 | 40 | 220 | 50% | 2302 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2662 | 64 | 82 | 53% | 2630 | 28% |
|  |  | E1 | 2711 | 50 | 132 | 49% | 2723 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2572 | 52 | 122 | 51% | 2553 | 30% |
|  |  | P1 | 2699 | 58 | 104 | 55% | 2637 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2319 | 49 | 156 | 55% | 2199 | 24% |
|  |  | P1 | 2336 | 65 | 90 | 55% | 2272 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2681 | 87 | 48 | 51% | 2658 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1747 | 329 | 16 | 100% | 702 | 0% |
|  |  | E1 | 837 | 341 | 6 | 100% | 266 | 0% |