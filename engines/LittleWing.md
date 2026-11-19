# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 1995<sub>(+23) | 2307<sub>(0) | 2415<sub>(+40) |  |
| 0.8.0 | 2026-03-03 | 1972 | 2307 | 2375 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 1974<sub>(-20) | 2292<sub>(+20) | 2323<sub>(-7) |  |
| 0.8.0 | 2026-03-03 | 1994 | 2272 | 2330 |  |
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

Generated: 2026-11-19 05:39:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "E1: STC (8.0+0.08s)" [1972, 1995]
  line "E1: LTC (60.0+0.60s)" [2307, 2307]
  line "E1: VLTC (2m24s+1.12s)" [2375, 2415]
  line "P1: STC (8.0+0.08s)" [1994, 1974]
  line "P1: LTC (60.0+0.60s)" [2272, 2292]
  line "P1: VLTC (2m24s+1.12s)" [2330, 2323]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2323 | 45 | 182 | 48% | 2363 | 20% |
|  |  | E1 | 2415 | 36 | 272 | 54% | 2356 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2292 | 50 | 136 | 48% | 2310 | 24% |
|  |  | E1 | 2307 | 34 | 300 | 51% | 2283 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1974 | 41 | 216 | 47% | 2003 | 21% |
|  |  | E1 | 1995 | 36 | 296 | 51% | 1978 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  |  | P1 | 2330 | 42 | 196 | 46% | 2345 | 24% |
|  |  | E1 | 2375 | 38 | 248 | 50% | 2369 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  |  | P1 | 2272 | 48 | 152 | 49% | 2276 | 26% |
|  |  | E1 | 2307 | 40 | 228 | 48% | 2327 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1994 | 42 | 220 | 50% | 2009 | 18% |
|  |  | E1 | 1972 | 35 | 312 | 45% | 2043 | 19% |
|  |  | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |