# Engine: ElephantGambit

Author: Ek Alexander Loodin

Home: https://github.com/looak/elephant

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-11-19 | 2491<sub>(+77) | 2816<sub>(+42) | 2877<sub>(+47) |  |
| 1.3.2 | 2026-10-25 | 2414<sub>(+149) | 2774<sub>(+183) | 2830<sub>(+173) |  |
| 1.0.0 | 2026-10-14 | 2265<sub>(-12) | 2591<sub>(+72) | 2657<sub>(+6) |  |
| 0.15.2 | 2026-10-11 | 2277<sub>(+1459) | 2519<sub>(+new) | 2651<sub>(+27) |  |
| 0.15.1 | 2026-10-11 | 818 |  | 2624 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-11-19 | 2530<sub>(+47) | 2795<sub>(+44) | 2889<sub>(+69) |  |
| 1.3.2 | 2026-10-25 | 2483<sub>(+258) | 2751<sub>(+256) | 2820<sub>(+181) |  |
| 1.0.0 | 2026-10-14 | 2225<sub>(-30) | 2495<sub>(-100) | 2639<sub>(+83) |  |
| 0.15.2 | 2026-10-11 | 2255 | 2595 | 2556 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.15.2 | 2026-10-11 | 2255 | 2595 | 2556 |  |
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

Generated: 2026-11-26 05:38:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.15.2", "1.0.0", "1.3.2", "1.6.0"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2277, 2265, 2414, 2491]
  line "E1: LTC (60.0+0.60s)" [2519, 2591, 2774, 2816]
  line "E1: VLTC (2m24s+1.12s)" [2651, 2657, 2830, 2877]
  line "P1: STC (8.0+0.08s)" [2255, 2225, 2483, 2530]
  line "P1: LTC (60.0+0.60s)" [2595, 2495, 2751, 2795]
  line "P1: VLTC (2m24s+1.12s)" [2556, 2639, 2820, 2889]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2877 | 37 | 216 | 51% | 2870 | 41% |
|  |  | P1 | 2889 | 48 | 136 | 57% | 2828 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2816 | 32 | 308 | 53% | 2795 | 37% |
|  |  | P1 | 2795 | 51 | 126 | 51% | 2784 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2491 | 43 | 165 | 49% | 2502 | 38% |
|  |  | P1 | 2530 | 42 | 188 | 44% | 2579 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2820 | 35 | 260 | 47% | 2850 | 37% |
|  |  | E1 | 2830 | 30 | 364 | 52% | 2813 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2751 | 38 | 232 | 48% | 2772 | 33% |
|  |  | E1 | 2774 | 30 | 356 | 49% | 2778 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2483 | 40 | 212 | 50% | 2484 | 27% |
|  |  | E1 | 2414 | 34 | 292 | 50% | 2411 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2657 | 39 | 232 | 50% | 2664 | 24% |
|  |  | P1 | 2639 | 40 | 208 | 52% | 2628 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2591 | 37 | 254 | 49% | 2591 | 26% |
|  |  | P1 | 2495 | 42 | 186 | 50% | 2512 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2225 | 39 | 236 | 57% | 2168 | 22% |
|  |  | E1 | 2265 | 38 | 256 | 50% | 2257 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2556 | 64 | 82 | 53% | 2522 | 28% |
|  |  | E1 | 2651 | 50 | 132 | 49% | 2662 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2595 | 58 | 104 | 55% | 2535 | 28% |
|  |  | E1 | 2519 | 52 | 122 | 51% | 2500 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2255 | 65 | 90 | 55% | 2192 | 17% |
|  |  | E1 | 2277 | 49 | 156 | 55% | 2159 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2624 | 87 | 48 | 51% | 2603 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1735 | 332 | 16 | 100% | 695 | 0% |
|  |  | E1 | 818 | 341 | 6 | 100% | 252 | 0% |