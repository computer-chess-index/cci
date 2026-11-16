# Engine: Horsie

Author: Liam McGuire

Home: https://github.com/liamt19/Horsie

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3340<sub>(+69) | 3590<sub>(+80) | 3630<sub>(+5) |  |
| 1.0 | 2025-01-08 | 3271 | 3510 | 3625 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3329<sub>(+73) | 3510<sub>(+16) | 3557<sub>(+132) |  |
| 1.0 | 2025-01-08 | 3256 | 3494 | 3425 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3363<sub>(+15) | 3513<sub>(+15) | 3544<sub>(-4) |  |
| 1.0 | 2025-01-08 | 3348 | 3498 | 3548 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Horsie+<version>&body=###%20Engine%20name%0AHorsie%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:38:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3271, 3340]
  line "E1: LTC (60.0+0.60s)" [3510, 3590]
  line "E1: VLTC (2m24s+1.12s)" [3625, 3630]
  line "P1: STC (8.0+0.08s)" [3256, 3329]
  line "P1: LTC (60.0+0.60s)" [3494, 3510]
  line "P1: VLTC (2m24s+1.12s)" [3425, 3557]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3348, 3363]
  line "T1: LTC (60.0+0.60s)" [3498, 3513]
  line "T1: VLTC (2m24s+1.12s)" [3548, 3544]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3630 | 30 | 252 | 51% | 3622 | 86% |
|  |  | T1 | 3544 | 16 | 946 | 50% | 3541 | 87% |
|  |  | P1 | 3557 | 38 | 160 | 48% | 3571 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3590 | 30 | 272 | 52% | 3579 | 78% |
|  |  | T1 | 3513 | 16 | 950 | 51% | 3509 | 83% |
|  |  | P1 | 3510 | 38 | 164 | 48% | 3519 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3363 | 15 | 1098 | 50% | 3364 | 69% |
|  |  | P1 | 3329 | 32 | 252 | 49% | 3339 | 67% |
|  |  | E1 | 3340 | 25 | 438 | 47% | 3363 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3625 | 92 | 36 | 65% | 3409 | 58% |
|  |  | T1 | 3548 | 28 | 304 | 49% | 3553 | 86% |
|  |  | P1 | 3425 | 111 | 24 | 67% | 3209 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3510 | 84 | 46 | 66% | 3295 | 50% |
|  |  | T1 | 3498 | 26 | 348 | 51% | 3490 | 85% |
|  |  | P1 | 3494 | 131 | 16 | 72% | 3309 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3271 | 65 | 72 | 59% | 3114 | 49% |
|  |  | T1 | 3348 | 29 | 292 | 49% | 3352 | 75% |
|  |  | P1 | 3256 | 98 | 36 | 65% | 2912 | 53% |