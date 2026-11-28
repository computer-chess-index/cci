# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2743<sub>(-22) | 3129<sub>(+70) | 3204<sub>(+79) |  |
| 3.1 | 2026-04-03 | 2765 | 3059 | 3125 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2795<sub>(-31) | 3101<sub>(+84) | 3194<sub>(+32) |  |
| 3.1 | 2026-04-03 | 2826 | 3017 | 3162 |  |
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

Generated: 2026-11-28 05:44:25

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2765, 2743]
  line "E1: LTC (60.0+0.60s)" [3059, 3129]
  line "E1: VLTC (2m24s+1.12s)" [3125, 3204]
  line "P1: STC (8.0+0.08s)" [2826, 2795]
  line "P1: LTC (60.0+0.60s)" [3017, 3101]
  line "P1: VLTC (2m24s+1.12s)" [3162, 3194]
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
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3186 | 27 | 386 | 49% | 3191 | 53% |
|  |  | P1 | 3194 | 30 | 310 | 51% | 3182 | 55% |
|  |  | E1 | 3204 | 26 | 455 | 53% | 3162 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3137 | 27 | 400 | 51% | 3132 | 50% |
|  |  | P1 | 3101 | 30 | 336 | 50% | 3087 | 45% |
|  |  | E1 | 3129 | 27 | 446 | 53% | 3069 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2865 | 25 | 492 | 50% | 2867 | 39% |
|  |  | P1 | 2795 | 32 | 322 | 47% | 2831 | 34% |
|  |  | E1 | 2743 | 26 | 490 | 45% | 2776 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3162 | 89 | 36 | 40% | 3239 | 47% |
|  |  | E1 | 3125 | 44 | 150 | 47% | 3156 | 47% |
|  |  | T1 | 3139 | 29 | 352 | 50% | 3140 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3017 | 71 | 58 | 53% | 2982 | 48% |
|  |  | E1 | 3059 | 43 | 152 | 50% | 3060 | 53% |
|  |  | T1 | 3059 | 27 | 406 | 50% | 3056 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2765 | 47 | 146 | 51% | 2720 | 39% |
|  |  | T1 | 2836 | 28 | 384 | 50% | 2832 | 41% |
|  |  | P1 | 2826 | 59 | 100 | 49% | 2801 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3077 | 31 | 318 | 52% | 3059 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3001 | 29 | 344 | 52% | 2981 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2736 | 29 | 386 | 52% | 2705 | 37% |