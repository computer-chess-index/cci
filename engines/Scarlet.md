# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2803<sub>(+733) | 3129<sub>(+696) | 3204<sub>(+652) |  |
| 1.0 | 2026-07-26 | 2070 | 2433 | 2552 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2832<sub>(+741) | 3069<sub>(+678) | 3139<sub>(+706) |  |
| 1.0 | 2026-07-26 | 2091 | 2391 | 2433 |  |
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

Generated: 2026-11-16 05:42:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2000 --> 3300
  line "E1: STC (8.0+0.08s)" [2070, 2803]
  line "E1: LTC (60.0+0.60s)" [2433, 3129]
  line "E1: VLTC (2m24s+1.12s)" [2552, 3204]
  line "P1: STC (8.0+0.08s)" [2091, 2832]
  line "P1: LTC (60.0+0.60s)" [2391, 3069]
  line "P1: VLTC (2m24s+1.12s)" [2433, 3139]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3139 | 33 | 260 | 53% | 3106 | 50% |
|  |  | E1 | 3204 | 28 | 380 | 51% | 3185 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3069 | 37 | 224 | 53% | 3031 | 40% |
|  |  | E1 | 3129 | 29 | 356 | 52% | 3101 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2832 | 31 | 334 | 47% | 2850 | 35% |
|  |  | E1 | 2803 | 30 | 384 | 55% | 2742 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2433 | 42 | 222 | 47% | 2449 | 21% |
|  |  | E1 | 2552 | 36 | 282 | 49% | 2552 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  |  | P1 | 2391 | 44 | 192 | 47% | 2429 | 22% |
|  |  | E1 | 2433 | 36 | 278 | 52% | 2399 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |
|  |  | P1 | 2091 | 39 | 240 | 48% | 2099 | 22% |
|  |  | E1 | 2070 | 34 | 320 | 46% | 2114 | 21% |