# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.1 | 2026-10-18 | 3063<sub>(+212) | 3372<sub>(+187) | 3448<sub>(+196) |  |
| 1.9.0 | 2026-10-16 | 2851 | 3185 | 3252 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.1 | 2026-10-18 | 3185<sub>(+204) | 3465<sub>(+168) | 3513<sub>(+145) |  |
| 1.9.0 | 2026-10-16 | 2981 | 3297 | 3368 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2981 | 3297 | 3368 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Superpawn+<version>&body=###%20Engine%20name%0ASuperpawn%0A%0A###%20Version%0A1.9.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-03 05:43:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1"]
  y-axis "Elo Rating" 2800 --> 3600
  line "E1: STC (8.0+0.08s)" [2851, 3063]
  line "E1: LTC (60.0+0.60s)" [3185, 3372]
  line "E1: VLTC (2m24s+1.12s)" [3252, 3448]
  line "P1: STC (8.0+0.08s)" [2981, 3185]
  line "P1: LTC (60.0+0.60s)" [3297, 3465]
  line "P1: VLTC (2m24s+1.12s)" [3368, 3513]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3513 | 36 | 202 | 52% | 3499 | 62% |
|  |  | E1 | 3448 | 32 | 262 | 52% | 3433 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3465 | 36 | 208 | 50% | 3465 | 57% |
|  |  | E1 | 3372 | 35 | 224 | 52% | 3356 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3185 | 46 | 140 | 49% | 3187 | 46% |
|  |  | E1 | 3063 | 33 | 296 | 55% | 3016 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3368 | 43 | 194 | 60% | 3119 | 39% |
|  |  | E1 | 3252 | 34 | 292 | 55% | 3096 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3297 | 50 | 150 | 62% | 2962 | 32% |
|  |  | E1 | 3185 | 42 | 214 | 62% | 2893 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2981 | 47 | 176 | 58% | 2751 | 26% |
|  |  | E1 | 2851 | 42 | 224 | 61% | 2600 | 26% |