# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2064<sub>(+40) | 2383<sub>(+7) | 2457<sub>(+31) |  |
| 0.8.0 | 2026-03-03 | 2024 | 2376 | 2426 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2121<sub>(+14) | 2458<sub>(+17) | 2499<sub>(+3) |  |
| 0.8.0 | 2026-03-03 | 2107 | 2441 | 2496 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.0 | 2026-03-03 | 2074 | 2344 | 2407 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+LittleWing+<version>&body=###%20Engine%20name%0ALittleWing%0A%0A###%20Version%0A0.8.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-07 05:39:22

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 2000 --> 2500
  line "E1: STC (8.0+0.08s)" [2024, 2064]
  line "E1: LTC (60.0+0.60s)" [2376, 2383]
  line "E1: VLTC (2m24s+1.12s)" [2426, 2457]
  line "P1: STC (8.0+0.08s)" [2107, 2121]
  line "P1: LTC (60.0+0.60s)" [2441, 2458]
  line "P1: VLTC (2m24s+1.12s)" [2496, 2499]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2499 | 51 | 138 | 51% | 2514 | 23% |
|  |  | E1 | 2457 | 40 | 208 | 51% | 2448 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2458 | 53 | 124 | 49% | 2468 | 23% |
|  |  | E1 | 2383 | 38 | 240 | 51% | 2372 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2121 | 47 | 160 | 46% | 2159 | 20% |
|  |  | E1 | 2064 | 40 | 228 | 50% | 2070 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2426 | 43 | 194 | 49% | 2414 | 26% |
|  |  | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  |  | P1 | 2496 | 45 | 168 | 44% | 2547 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2376 | 42 | 212 | 48% | 2403 | 18% |
|  |  | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  |  | P1 | 2441 | 53 | 124 | 49% | 2450 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2024 | 36 | 284 | 44% | 2107 | 18% |
|  |  | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |
|  |  | P1 | 2107 | 47 | 172 | 49% | 2130 | 19% |