# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2007<sub>(+18) | 2325<sub>(+6) | 2423<sub>(+38) |  |
| 0.8.0 | 2026-03-03 | 1989 | 2319 | 2385 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 1966<sub>(-16) | 2277<sub>(+13) | 2314<sub>(+11) |  |
| 0.8.0 | 2026-03-03 | 1982 | 2264 | 2303 |  |
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

Generated: 2026-11-14 05:39:31

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "E1: STC (8.0+0.08s)" [1989, 2007]
  line "E1: LTC (60.0+0.60s)" [2319, 2325]
  line "E1: VLTC (2m24s+1.12s)" [2385, 2423]
  line "P1: STC (8.0+0.08s)" [1982, 1966]
  line "P1: LTC (60.0+0.60s)" [2264, 2277]
  line "P1: VLTC (2m24s+1.12s)" [2303, 2314]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2314 | 49 | 150 | 50% | 2333 | 21% |
|  |  | E1 | 2423 | 38 | 248 | 55% | 2357 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2277 | 53 | 124 | 49% | 2287 | 23% |
|  |  | E1 | 2325 | 35 | 284 | 52% | 2295 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1966 | 43 | 196 | 47% | 1991 | 22% |
|  |  | E1 | 2007 | 37 | 280 | 51% | 1994 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2303 | 44 | 180 | 45% | 2333 | 25% |
|  |  | E1 | 2385 | 40 | 224 | 50% | 2375 | 25% |
|  |  | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2264 | 50 | 136 | 51% | 2255 | 25% |
|  |  | E1 | 2319 | 40 | 224 | 48% | 2342 | 19% |
|  |  | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1982 | 44 | 200 | 50% | 1998 | 19% |
|  |  | E1 | 1989 | 36 | 296 | 45% | 2061 | 18% |
|  |  | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |