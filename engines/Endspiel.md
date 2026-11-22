# Engine: Endspiel

Author: Thilo Horstmann

Home: https://github.com/thilo11/endspiel

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-11-12 | 3008<sub>(-28) | 3353<sub>(0) | 3386<sub>(-28) |  |
| 2.2.0 | 2026-10-30 | 3036 | 3353 | 3414 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-11-12 | 3046 | 3320 | 3355 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-11-12 | 3046 | 3320 | 3355 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Endspiel+<version>&body=###%20Engine%20name%0AEndspiel%0A%0A###%20Version%0A2.3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:38:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2.0", "2.3.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3036, 3008]
  line "E1: LTC (60.0+0.60s)" [3353, 3353]
  line "E1: VLTC (2m24s+1.12s)" [3414, 3386]
  line "P1: STC (8.0+0.08s)" [3046]
  line "P1: LTC (60.0+0.60s)" [3320]
  line "P1: VLTC (2m24s+1.12s)" [3355]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3355 | 46 | 136 | 58% | 3168 | 61% |
|  |  | E1 | 3386 | 39 | 184 | 55% | 3305 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3320 | 52 | 104 | 58% | 3146 | 59% |
|  |  | E1 | 3353 | 36 | 208 | 55% | 3290 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3008 | 38 | 212 | 50% | 3001 | 43% |
|  |  | P1 | 3046 | 40 | 194 | 57% | 2965 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3414 | 44 | 128 | 50% | 3413 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3353 | 122 | 16 | 47% | 3372 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3036 | 48 | 124 | 48% | 3052 | 51% |