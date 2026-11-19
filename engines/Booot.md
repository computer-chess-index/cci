# Engine: Booot

Author: Alex Morozov

Home: https://github.com/booot76/Booot-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3197<sub>(+39) | 3456<sub>(+117) | 3573<sub>(+90) |  |
| 7.3 | 2024-01-28 | 3158 | 3339 | 3483 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3174<sub>(+28) | 3436<sub>(+49) | 3483<sub>(+190) |  |
| 7.3 | 2024-01-28 | 3146 | 3387 | 3293 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3241 | 3456 | 3499 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Booot+<version>&body=###%20Engine%20name%0ABooot%0A%0A###%20Version%0A7.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:36:33

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.3", "7.4"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3158, 3197]
  line "E1: LTC (60.0+0.60s)" [3339, 3456]
  line "E1: VLTC (2m24s+1.12s)" [3483, 3573]
  line "P1: STC (8.0+0.08s)" [3146, 3174]
  line "P1: LTC (60.0+0.60s)" [3387, 3436]
  line "P1: VLTC (2m24s+1.12s)" [3293, 3483]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3499 | 23 | 460 | 51% | 3486 | 80% |
|  |  | P1 | 3483 | 38 | 174 | 54% | 3413 | 78% |
|  |  | E1 | 3573 | 31 | 262 | 53% | 3525 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3456 | 21 | 572 | 50% | 3445 | 76% |
|  |  | P1 | 3436 | 39 | 160 | 52% | 3384 | 77% |
|  |  | E1 | 3456 | 27 | 346 | 55% | 3380 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3241 | 19 | 750 | 50% | 3237 | 58% |
|  |  | P1 | 3174 | 32 | 264 | 48% | 3191 | 61% |
|  |  | E1 | 3197 | 26 | 372 | 47% | 3214 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3293 | 111 | 24 | 73% | 3077 | 54% |
|  |  | E1 | 3483 | 85 | 44 | 68% | 3244 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3339 | 81 | 42 | 52% | 3299 | 57% |
|  |  | P1 | 3387 | 145 | 16 | 75% | 3106 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3158 | 72 | 58 | 49% | 3163 | 47% |
|  |  | P1 | 3146 | 103 | 32 | 56% | 3051 | 31% |