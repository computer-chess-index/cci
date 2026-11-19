# Engine: ElephantGambit

Author: Ek Alexander Loodin

Home: https://github.com/looak/elephant

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2411<sub>(+150) | 2765<sub>(+181) | 2830<sub>(+177) |  |
| 1.0.0 | 2026-10-14 | 2261<sub>(-12) | 2584<sub>(+69) | 2653<sub>(+3) |  |
| 0.15.2 | 2026-10-11 | 2273<sub>(+1452) | 2515<sub>(+new) | 2650<sub>(+27) |  |
| 0.15.1 | 2026-10-11 | 821 |  | 2623 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2460<sub>(+259) | 2726<sub>(+254) | 2784<sub>(+172) |  |
| 1.0.0 | 2026-10-14 | 2201<sub>(-33) | 2472<sub>(-96) | 2612<sub>(+83) |  |
| 0.15.2 | 2026-10-11 | 2234 | 2568 | 2529 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.15.2 | 2026-10-11 | 2234 | 2568 | 2529 |  |
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

Generated: 2026-11-19 05:38:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.15.2", "1.0.0", "1.3.2"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2273, 2261, 2411]
  line "E1: LTC (60.0+0.60s)" [2515, 2584, 2765]
  line "E1: VLTC (2m24s+1.12s)" [2650, 2653, 2830]
  line "P1: STC (8.0+0.08s)" [2234, 2201, 2460]
  line "P1: LTC (60.0+0.60s)" [2568, 2472, 2726]
  line "P1: VLTC (2m24s+1.12s)" [2529, 2612, 2784]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2830 | 30 | 360 | 52% | 2812 | 34% |
|  |  | P1 | 2784 | 35 | 252 | 46% | 2819 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2726 | 38 | 224 | 48% | 2746 | 33% |
|  |  | E1 | 2765 | 31 | 344 | 48% | 2778 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2460 | 41 | 204 | 50% | 2462 | 27% |
|  |  | E1 | 2411 | 36 | 264 | 50% | 2407 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2612 | 41 | 204 | 52% | 2601 | 28% |
|  |  | E1 | 2653 | 39 | 232 | 50% | 2661 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2472 | 43 | 182 | 50% | 2489 | 29% |
|  |  | E1 | 2584 | 37 | 254 | 49% | 2585 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2201 | 40 | 228 | 56% | 2149 | 22% |
|  |  | E1 | 2261 | 38 | 256 | 50% | 2252 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2529 | 64 | 82 | 53% | 2496 | 28% |
|  |  | E1 | 2650 | 50 | 132 | 49% | 2661 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2568 | 58 | 104 | 55% | 2508 | 28% |
|  |  | E1 | 2515 | 52 | 122 | 51% | 2496 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2234 | 64 | 90 | 55% | 2174 | 17% |
|  |  | E1 | 2273 | 49 | 156 | 55% | 2155 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2623 | 87 | 48 | 51% | 2601 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1728 | 331 | 16 | 100% | 694 | 0% |
|  |  | E1 | 821 | 341 | 6 | 100% | 254 | 0% |