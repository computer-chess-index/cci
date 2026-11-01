# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2049<sub>(+37) | 2368<sub>(+7) | 2452<sub>(+41) |  |
| 0.8.0 | 2026-03-03 | 2012 | 2361 | 2411 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2087<sub>(+16) | 2421<sub>(+14) | 2477<sub>(+13) |  |
| 0.8.0 | 2026-03-03 | 2071 | 2407 | 2464 |  |
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

Generated: 2026-11-01 05:39:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 2000 --> 2500
  line "E1: STC (8.0+0.08s)" [2012, 2049]
  line "E1: LTC (60.0+0.60s)" [2361, 2368]
  line "E1: VLTC (2m24s+1.12s)" [2411, 2452]
  line "P1: STC (8.0+0.08s)" [2071, 2087]
  line "P1: LTC (60.0+0.60s)" [2407, 2421]
  line "P1: VLTC (2m24s+1.12s)" [2464, 2477]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2477 | 54 | 122 | 52% | 2479 | 21% |
|  |  | E1 | 2452 | 43 | 184 | 52% | 2430 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2421 | 53 | 120 | 48% | 2434 | 23% |
|  |  | E1 | 2368 | 42 | 196 | 51% | 2356 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2087 | 51 | 136 | 45% | 2134 | 20% |
|  |  | E1 | 2049 | 42 | 208 | 49% | 2060 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  |  | P1 | 2464 | 45 | 168 | 44% | 2514 | 24% |
|  |  | E1 | 2411 | 43 | 194 | 49% | 2399 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2407 | 53 | 124 | 49% | 2415 | 24% |
|  |  | E1 | 2361 | 42 | 212 | 48% | 2387 | 18% |
|  |  | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2071 | 47 | 172 | 49% | 2094 | 19% |
|  |  | E1 | 2012 | 36 | 284 | 44% | 2095 | 18% |
|  |  | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |