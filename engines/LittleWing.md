# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2010<sub>(+23) | 2322<sub>(+12) | 2403<sub>(+39) |  |
| 0.8.0 | 2026-03-03 | 1987 | 2310 | 2364 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 1967<sub>(-12) | 2288<sub>(+15) | 2325<sub>(+7) |  |
| 0.8.0 | 2026-03-03 | 1979 | 2273 | 2318 |  |
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

Generated: 2026-11-13 05:39:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "E1: STC (8.0+0.08s)" [1987, 2010]
  line "E1: LTC (60.0+0.60s)" [2310, 2322]
  line "E1: VLTC (2m24s+1.12s)" [2364, 2403]
  line "P1: STC (8.0+0.08s)" [1979, 1967]
  line "P1: LTC (60.0+0.60s)" [2273, 2288]
  line "P1: VLTC (2m24s+1.12s)" [2318, 2325]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2325 | 49 | 150 | 50% | 2345 | 21% |
|  |  | E1 | 2403 | 38 | 240 | 54% | 2341 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2288 | 53 | 124 | 49% | 2296 | 23% |
|  |  | E1 | 2322 | 36 | 276 | 53% | 2286 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1967 | 43 | 192 | 47% | 1999 | 21% |
|  |  | E1 | 2010 | 38 | 264 | 51% | 1993 | 14% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2364 | 41 | 212 | 49% | 2364 | 25% |
|  |  | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  |  | P1 | 2318 | 45 | 172 | 46% | 2354 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2310 | 42 | 212 | 48% | 2336 | 18% |
|  |  | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  |  | P1 | 2273 | 52 | 128 | 51% | 2263 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1987 | 36 | 296 | 45% | 2059 | 18% |
|  |  | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |
|  |  | P1 | 1979 | 45 | 192 | 50% | 1997 | 19% |