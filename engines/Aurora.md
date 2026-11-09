# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2441<sub>(-57) | 2857<sub>(+19) | 2942<sub>(+7) |  |
| 1.28.0 | 2026-09-21 | 2498<sub>(+119) | 2838<sub>(+139) | 2935<sub>(+216) |  |
| 1.27.0timehotfix | 2026-05-28 | 2379 | 2699 | 2719 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2526<sub>(+66) | 2930<sub>(+75) | 2979<sub>(-10) |  |
| 1.28.0 | 2026-09-21 | 2460<sub>(+54) | 2855<sub>(+268) | 2989<sub>(+259) |  |
| 1.27.0timehotfix | 2026-05-28 | 2406 | 2587 | 2730 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

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

Generated: 2026-11-09 05:36:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2300 --> 3000
  line "E1: STC (8.0+0.08s)" [2379, 2498, 2441]
  line "E1: LTC (60.0+0.60s)" [2699, 2838, 2857]
  line "E1: VLTC (2m24s+1.12s)" [2719, 2935, 2942]
  line "P1: STC (8.0+0.08s)" [2406, 2460, 2526]
  line "P1: LTC (60.0+0.60s)" [2587, 2855, 2930]
  line "P1: VLTC (2m24s+1.12s)" [2730, 2989, 2979]
```



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

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2979 | 40 | 186 | 51% | 2971 | 40% |
|  |  | E1 | 2942 | 36 | 228 | 50% | 2936 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2857 | 33 | 292 | 48% | 2873 | 35% |
|  |  | P1 | 2930 | 45 | 160 | 50% | 2932 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2441 | 38 | 226 | 52% | 2427 | 27% |
|  |  | P1 | 2526 | 45 | 164 | 49% | 2533 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 2989 | 43 | 162 | 48% | 3002 | 41% |
|  |  | E1 | 2935 | 32 | 302 | 54% | 2892 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2855 | 45 | 156 | 55% | 2755 | 37% |
|  |  | E1 | 2838 | 38 | 216 | 51% | 2830 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2460 | 46 | 172 | 44% | 2541 | 20% |
|  |  | E1 | 2498 | 43 | 192 | 51% | 2484 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2730 | 33 | 296 | 44% | 2797 | 36% |
|  |  | E1 | 2719 | 36 | 248 | 47% | 2751 | 33% |
|  |  | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2587 | 42 | 206 | 53% | 2565 | 24% |
|  |  | E1 | 2699 | 37 | 252 | 53% | 2631 | 31% |
|  |  | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2406 | 44 | 192 | 45% | 2472 | 24% |
|  |  | E1 | 2379 | 39 | 236 | 49% | 2385 | 20% |
|  |  | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |