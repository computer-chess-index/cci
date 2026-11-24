# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2800<sub>(+733) | 3112<sub>(+683) | 3204<sub>(+652) |  |
| 1.0 | 2026-07-26 | 2067 | 2429 | 2552 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2870<sub>(+760) | 3094<sub>(+690) | 3164<sub>(+703) |  |
| 1.0 | 2026-07-26 | 2110 | 2404 | 2461 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-07-26 | 2194 | 2468 | 2520 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Scarlet+<version>&body=###%20Engine%20name%0AScarlet%0A%0A###%20Version%0A1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-24 05:42:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2000 --> 3300
  line "E1: STC (8.0+0.08s)" [2067, 2800]
  line "E1: LTC (60.0+0.60s)" [2429, 3112]
  line "E1: VLTC (2m24s+1.12s)" [2552, 3204]
  line "P1: STC (8.0+0.08s)" [2110, 2870]
  line "P1: LTC (60.0+0.60s)" [2404, 3094]
  line "P1: VLTC (2m24s+1.12s)" [2461, 3164]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3164 | 33 | 272 | 52% | 3135 | 50% |
|  |  | E1 | 3204 | 27 | 400 | 52% | 3182 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3094 | 35 | 252 | 52% | 3067 | 40% |
|  |  | E1 | 3112 | 28 | 396 | 50% | 3105 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2870 | 29 | 374 | 48% | 2881 | 35% |
|  |  | E1 | 2800 | 28 | 436 | 54% | 2751 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2461 | 41 | 226 | 47% | 2476 | 21% |
|  |  | E1 | 2552 | 35 | 292 | 49% | 2550 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  |  | P1 | 2404 | 42 | 208 | 47% | 2448 | 21% |
|  |  | E1 | 2429 | 35 | 282 | 52% | 2395 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |
|  |  | P1 | 2110 | 39 | 248 | 48% | 2118 | 21% |
|  |  | E1 | 2067 | 32 | 344 | 46% | 2106 | 22% |