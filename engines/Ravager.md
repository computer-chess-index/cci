# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3355<sub>(+412) | 3598<sub>(+299) | 3641<sub>(+205) |  |
| 3.3.0 | 2026-10-09 | 2943<sub>(+409) | 3299<sub>(+321) | 3436<sub>(+323) |  |
| 2.0 | 2026-08-23 | 2534 | 2978 | 3113 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3387<sub>(+363) | 3599<sub>(+278) | 3600<sub>(+189) |  |
| 3.3.0 | 2026-10-09 | 3024<sub>(+358) | 3321<sub>(+261) | 3411<sub>(+203) |  |
| 2.0 | 2026-08-23 | 2666 | 3060 | 3208 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-08-23 | 2757 | 3109 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ravager+<version>&body=###%20Engine%20name%0ARavager%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-26 05:42:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3700
  line "E1: STC (8.0+0.08s)" [2534, 2943, 3355]
  line "E1: LTC (60.0+0.60s)" [2978, 3299, 3598]
  line "E1: VLTC (2m24s+1.12s)" [3113, 3436, 3641]
  line "P1: STC (8.0+0.08s)" [2666, 3024, 3387]
  line "P1: LTC (60.0+0.60s)" [3060, 3321, 3599]
  line "P1: VLTC (2m24s+1.12s)" [3208, 3411, 3600]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3641 | 28 | 294 | 48% | 3653 | 86% |
|  |  | P1 | 3600 | 39 | 160 | 55% | 3567 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3598 | 31 | 246 | 53% | 3575 | 80% |
|  |  | P1 | 3599 | 38 | 164 | 47% | 3614 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3355 | 26 | 398 | 54% | 3320 | 61% |
|  |  | P1 | 3387 | 38 | 172 | 53% | 3357 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3411 | 41 | 150 | 53% | 3390 | 71% |
|  |  | E1 | 3436 | 32 | 244 | 50% | 3433 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3321 | 27 | 346 | 57% | 3274 | 68% |
|  |  | E1 | 3299 | 27 | 340 | 54% | 3267 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3024 | 34 | 256 | 50% | 3009 | 53% |
|  |  | E1 | 2943 | 32 | 278 | 52% | 2924 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3113 | 30 | 302 | 44% | 3163 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3208 | 37 | 204 | 49% | 3218 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2978 | 30 | 322 | 42% | 3040 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3060 | 39 | 184 | 48% | 3074 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2534 | 35 | 298 | 39% | 2653 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2666 | 37 | 216 | 48% | 2677 | 43% |