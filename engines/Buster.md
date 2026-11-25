# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2199<sub>(+16) | 2493<sub>(-50) | 2624<sub>(+4) |  |
| 7.0.3 | 2026-10-29 | 2183<sub>(-66) | 2543<sub>(-52) | 2620<sub>(+23) |  |
| 7.0.2 | 2026-09-26 | 2249 | 2595 | 2597 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2214<sub>(+18) | 2516<sub>(+24) | 2579<sub>(+54) |  |
| 7.0.3 | 2026-10-29 | 2196<sub>(+10) | 2492<sub>(-99) | 2525<sub>(-109) |  |
| 7.0.2 | 2026-09-26 | 2186 | 2591 | 2634 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.2 | 2026-09-26 | 2186 | 2591 | 2634 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Buster+<version>&body=###%20Engine%20name%0ABuster%0A%0A###%20Version%0A7.0.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:36:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.2", "7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2249, 2183, 2199]
  line "E1: LTC (60.0+0.60s)" [2595, 2543, 2493]
  line "E1: VLTC (2m24s+1.12s)" [2597, 2620, 2624]
  line "P1: STC (8.0+0.08s)" [2186, 2196, 2214]
  line "P1: LTC (60.0+0.60s)" [2591, 2492, 2516]
  line "P1: VLTC (2m24s+1.12s)" [2634, 2525, 2579]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2579 | 44 | 172 | 50% | 2583 | 29% |
|  |  | E1 | 2624 | 32 | 352 | 48% | 2637 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2516 | 37 | 240 | 49% | 2518 | 31% |
|  |  | E1 | 2493 | 34 | 288 | 52% | 2477 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2214 | 41 | 204 | 48% | 2238 | 28% |
|  |  | E1 | 2199 | 34 | 292 | 51% | 2180 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2525 | 45 | 168 | 56% | 2453 | 32% |
|  |  | E1 | 2620 | 37 | 260 | 53% | 2583 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2492 | 44 | 188 | 57% | 2369 | 28% |
|  |  | E1 | 2543 | 30 | 396 | 57% | 2445 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2183 | 39 | 244 | 55% | 2110 | 19% |
|  |  | P1 | 2196 | 43 | 206 | 57% | 2103 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2634 | 56 | 104 | 50% | 2634 | 31% |
|  |  | E1 | 2597 | 40 | 212 | 54% | 2553 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2591 | 68 | 72 | 56% | 2533 | 29% |
|  |  | E1 | 2595 | 44 | 176 | 54% | 2564 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2186 | 89 | 44 | 56% | 2137 | 20% |
|  |  | E1 | 2249 | 45 | 164 | 49% | 2255 | 29% |