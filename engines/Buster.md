# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2201<sub>(+17) | 2493<sub>(-50) | 2622<sub>(+4) |  |
| 7.0.3 | 2026-10-29 | 2184<sub>(-54) | 2543<sub>(-45) | 2618<sub>(+22) |  |
| 7.0.2 | 2026-09-26 | 2238 | 2588 | 2596 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2215<sub>(+16) | 2516<sub>(+23) | 2580<sub>(+54) |  |
| 7.0.3 | 2026-10-29 | 2199<sub>(-16) | 2493<sub>(-75) | 2526<sub>(-101) |  |
| 7.0.2 | 2026-09-26 | 2215 | 2568 | 2627 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.2 | 2026-09-26 | 2215 | 2568 | 2627 |  |
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

Generated: 2026-11-27 05:36:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.2", "7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2238, 2184, 2201]
  line "E1: LTC (60.0+0.60s)" [2588, 2543, 2493]
  line "E1: VLTC (2m24s+1.12s)" [2596, 2618, 2622]
  line "P1: STC (8.0+0.08s)" [2215, 2199, 2215]
  line "P1: LTC (60.0+0.60s)" [2568, 2493, 2516]
  line "P1: VLTC (2m24s+1.12s)" [2627, 2526, 2580]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2580 | 44 | 172 | 50% | 2584 | 29% |
|  |  | E1 | 2622 | 32 | 352 | 48% | 2634 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2516 | 37 | 240 | 49% | 2518 | 31% |
|  |  | E1 | 2493 | 34 | 292 | 52% | 2479 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2215 | 41 | 204 | 48% | 2240 | 28% |
|  |  | E1 | 2201 | 34 | 292 | 51% | 2182 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2526 | 45 | 168 | 56% | 2454 | 32% |
|  |  | E1 | 2618 | 37 | 260 | 53% | 2581 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2493 | 44 | 188 | 57% | 2371 | 28% |
|  |  | E1 | 2543 | 30 | 396 | 57% | 2444 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2199 | 43 | 206 | 57% | 2105 | 26% |
|  |  | E1 | 2184 | 39 | 244 | 55% | 2113 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2596 | 40 | 212 | 54% | 2552 | 30% |
|  |  | P1 | 2627 | 49 | 136 | 50% | 2630 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2588 | 41 | 200 | 53% | 2568 | 27% |
|  |  | P1 | 2568 | 47 | 148 | 51% | 2561 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2215 | 56 | 112 | 54% | 2183 | 23% |
|  |  | E1 | 2238 | 41 | 192 | 48% | 2253 | 29% |