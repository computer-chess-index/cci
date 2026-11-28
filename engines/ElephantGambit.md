# Engine: ElephantGambit

Author: Ek Alexander Loodin

Home: https://github.com/looak/elephant

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-11-19 | 2498<sub>(+84) | 2815<sub>(+46) | 2874<sub>(+44) |  |
| 1.3.2 | 2026-10-25 | 2414<sub>(+149) | 2769<sub>(+178) | 2830<sub>(+175) |  |
| 1.0.0 | 2026-10-14 | 2265<sub>(-12) | 2591<sub>(+72) | 2655<sub>(+4) |  |
| 0.15.2 | 2026-10-11 | 2277<sub>(+1459) | 2519<sub>(+new) | 2651<sub>(+27) |  |
| 0.15.1 | 2026-10-11 | 818 |  | 2624 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-11-19 | 2530<sub>(+45) | 2795<sub>(+42) | 2889<sub>(+69) |  |
| 1.3.2 | 2026-10-25 | 2485<sub>(+257) | 2753<sub>(+257) | 2820<sub>(+181) |  |
| 1.0.0 | 2026-10-14 | 2228<sub>(-29) | 2496<sub>(-100) | 2639<sub>(+82) |  |
| 0.15.2 | 2026-10-11 | 2257 | 2596 | 2557 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.15.2 | 2026-10-11 | 2257 | 2596 | 2557 |  |
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

Generated: 2026-11-28 05:38:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.15.2", "1.0.0", "1.3.2", "1.6.0"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2277, 2265, 2414, 2498]
  line "E1: LTC (60.0+0.60s)" [2519, 2591, 2769, 2815]
  line "E1: VLTC (2m24s+1.12s)" [2651, 2655, 2830, 2874]
  line "P1: STC (8.0+0.08s)" [2257, 2228, 2485, 2530]
  line "P1: LTC (60.0+0.60s)" [2596, 2496, 2753, 2795]
  line "P1: VLTC (2m24s+1.12s)" [2557, 2639, 2820, 2889]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2889 | 48 | 136 | 57% | 2830 | 40% |
|  |  | E1 | 2874 | 37 | 224 | 50% | 2869 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2795 | 51 | 126 | 51% | 2784 | 28% |
|  |  | E1 | 2815 | 31 | 324 | 53% | 2795 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2530 | 42 | 188 | 44% | 2580 | 30% |
|  |  | E1 | 2498 | 43 | 169 | 50% | 2500 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2830 | 30 | 364 | 52% | 2812 | 34% |
|  |  | P1 | 2820 | 35 | 260 | 47% | 2851 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2769 | 30 | 368 | 49% | 2778 | 33% |
|  |  | P1 | 2753 | 38 | 232 | 48% | 2772 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2414 | 34 | 292 | 50% | 2410 | 30% |
|  |  | P1 | 2485 | 40 | 212 | 50% | 2487 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2639 | 40 | 208 | 52% | 2630 | 28% |
|  |  | E1 | 2655 | 39 | 232 | 50% | 2664 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2496 | 42 | 186 | 50% | 2514 | 29% |
|  |  | E1 | 2591 | 37 | 254 | 49% | 2589 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2228 | 39 | 236 | 57% | 2172 | 22% |
|  |  | E1 | 2265 | 38 | 256 | 50% | 2257 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2651 | 50 | 132 | 49% | 2662 | 28% |
|  |  | P1 | 2557 | 64 | 82 | 53% | 2523 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2519 | 52 | 122 | 51% | 2500 | 30% |
|  |  | P1 | 2596 | 58 | 104 | 55% | 2537 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2257 | 65 | 90 | 55% | 2195 | 17% |
|  |  | E1 | 2277 | 49 | 156 | 55% | 2159 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2624 | 87 | 48 | 51% | 2603 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1735 | 332 | 16 | 100% | 695 | 0% |
|  |  | E1 | 818 | 341 | 6 | 100% | 252 | 0% |