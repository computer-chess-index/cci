# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 1994<sub>(+23) | 2302<sub>(-21) | 2414<sub>(+38) |  |
| 0.8.0 | 2026-03-03 | 1971 | 2323 | 2376 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 1991<sub>(-12) | 2298<sub>(+30) | 2337<sub>(-11) |  |
| 0.8.0 | 2026-03-03 | 2003 | 2268 | 2348 |  |
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

Generated: 2026-11-24 05:39:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "E1: STC (8.0+0.08s)" [1971, 1994]
  line "E1: LTC (60.0+0.60s)" [2323, 2302]
  line "E1: VLTC (2m24s+1.12s)" [2376, 2414]
  line "P1: STC (8.0+0.08s)" [2003, 1991]
  line "P1: LTC (60.0+0.60s)" [2268, 2298]
  line "P1: VLTC (2m24s+1.12s)" [2348, 2337]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2337 | 44 | 186 | 48% | 2377 | 20% |
|  |  | E1 | 2414 | 34 | 300 | 54% | 2363 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2298 | 49 | 144 | 48% | 2318 | 23% |
|  |  | E1 | 2302 | 34 | 316 | 50% | 2288 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1991 | 40 | 228 | 48% | 2010 | 20% |
|  |  | E1 | 1994 | 35 | 312 | 51% | 1978 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  |  | P1 | 2348 | 42 | 200 | 47% | 2357 | 25% |
|  |  | E1 | 2376 | 38 | 248 | 50% | 2369 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  |  | P1 | 2268 | 45 | 172 | 48% | 2284 | 27% |
|  |  | E1 | 2323 | 39 | 240 | 50% | 2327 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2003 | 42 | 224 | 50% | 2018 | 17% |
|  |  | E1 | 1971 | 35 | 312 | 45% | 2041 | 19% |
|  |  | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |