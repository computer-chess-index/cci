# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | 2026-05-28 | 2263 | 2589 | 2592 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | 2026-05-28 | 2434 | 2601 | 2730 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.0 | 2026-09-21 | 2438<sub>(+70) | 2789<sub>(+188) | 2865<sub>(+238) |  |
| 1.27.0timehotfix | 2026-05-28 | 2368 | 2601 | 2627 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aurora+<version>&body=###%20Engine%20name%0AAurora%0A%0A###%20Version%0A1.28.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-11 17:13:47

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "T1: STC (8.0+0.08s)" [2368, 2438]
  line "T1: LTC (60.0+0.60s)" [2601, 2789]
  line "T1: VLTC (2m24s+1.12s)" [2627, 2865]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2865 | 41 | 188 | 54% | 2824 | 37% |
| 1.28.0 | LTC <sub>(60.0+0.60s)</sub> | 2789 | 34 | 280 | 56% | 2738 | 38% |
| 1.28.0 | STC <sub>(8.0+0.08s)</sub> | 2438 | 39 | 234 | 49% | 2452 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | 2730 | 34 | 276 | 43% | 2805 | 37% |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | 2592 | 38 | 220 | 46% | 2634 | 34% |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | 2627 | 28 | 408 | 48% | 2642 | 32% |
| 1.27.0timehotfix | LTC <sub>(60.0+0.60s)</sub> | 2601 | 43 | 198 | 55% | 2558 | 24% |
| 1.27.0timehotfix | LTC <sub>(60.0+0.60s)</sub> | 2589 | 41 | 210 | 55% | 2495 | 31% |
| 1.27.0timehotfix | LTC <sub>(60.0+0.60s)</sub> | 2601 | 28 | 434 | 51% | 2593 | 29% |
| 1.27.0timehotfix | STC <sub>(8.0+0.08s)</sub> | 2434 | 44 | 184 | 45% | 2492 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | STC <sub>(8.0+0.08s)</sub> | 2263 | 42 | 204 | 49% | 2276 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | STC <sub>(8.0+0.08s)</sub> | 2368 | 28 | 448 | 49% | 2381 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |