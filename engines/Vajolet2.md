# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2747<sub>(+4) | 3128<sub>(+90) | 3198<sub>(+61) |  |
| 3.1 | 2026-04-03 | 2743 | 3038 | 3137 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2745<sub>(-27) | 3071<sub>(+129) | 3146<sub>(-20) |  |
| 3.1 | 2026-04-03 | 2772 | 2942 | 3166 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2865<sub>(+29) | 3137<sub>(+78) | 3186<sub>(+47) |  |
| 3.1 | 2026-04-03 | 2836<sub>(+100) | 3059<sub>(+58) | 3139<sub>(+62) |  |
| 3.0 | 2025-12-21 | 2736 | 3001 | 3077 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Vajolet2+<version>&body=###%20Engine%20name%0AVajolet2%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-15 05:44:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "E1: STC (8.0+0.08s)" [2743, 2747]
  line "E1: LTC (60.0+0.60s)" [3038, 3128]
  line "E1: VLTC (2m24s+1.12s)" [3137, 3198]
  line "P1: STC (8.0+0.08s)" [2772, 2745]
  line "P1: LTC (60.0+0.60s)" [2942, 3071]
  line "P1: VLTC (2m24s+1.12s)" [3166, 3146]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "T1: STC (8.0+0.08s)" [2736, 2836, 2865]
  line "T1: LTC (60.0+0.60s)" [3001, 3059, 3137]
  line "T1: VLTC (2m24s+1.12s)" [3077, 3139, 3186]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3198 | 27 | 427 | 52% | 3156 | 46% |
|  |  | T1 | 3186 | 27 | 386 | 49% | 3191 | 53% |
|  |  | P1 | 3146 | 32 | 276 | 50% | 3141 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3128 | 28 | 406 | 54% | 3059 | 40% |
|  |  | T1 | 3137 | 27 | 400 | 51% | 3132 | 50% |
|  |  | P1 | 3071 | 33 | 278 | 51% | 3042 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2865 | 25 | 492 | 50% | 2867 | 39% |
|  |  | P1 | 2745 | 34 | 282 | 46% | 2785 | 33% |
|  |  | E1 | 2747 | 27 | 452 | 46% | 2772 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3139 | 29 | 352 | 50% | 3140 | 47% |
|  |  | P1 | 3166 | 113 | 20 | 43% | 3227 | 55% |
|  |  | E1 | 3137 | 81 | 48 | 41% | 3225 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3059 | 27 | 406 | 50% | 3056 | 43% |
|  |  | P1 | 2942 | 97 | 32 | 53% | 2900 | 44% |
|  |  | E1 | 3038 | 71 | 56 | 46% | 3074 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2836 | 28 | 384 | 50% | 2832 | 41% |
|  |  | P1 | 2772 | 90 | 48 | 49% | 2704 | 27% |
|  |  | E1 | 2743 | 83 | 52 | 49% | 2651 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3077 | 31 | 318 | 52% | 3059 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3001 | 29 | 344 | 52% | 2981 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2736 | 29 | 386 | 52% | 2705 | 37% |