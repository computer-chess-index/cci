# Engine: Berserk

Author: Jay Honnold

Home: https://github.com/jhonnold/berserk

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14 | 2026-05-24 | 3465<sub>(+1902) | 3688<sub>(+773) | 3721<sub>(+899) |  |
| 13 | 2024-03-31 | 1563 | 2915 | 2822 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14 | 2026-05-24 | 3619<sub>(+949) | 3761<sub>(+753) | 3827<sub>(+896) |  |
| 13 | 2024-03-31 | 2670 | 3008 | 2931 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14 | 2026-05-24 | 3443<sub>(+1843) | 3555<sub>(+17) | 3586<sub>(+23) |  |
| 13 | 2024-03-31 | 1600 | 3538 | 3563 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Berserk+<version>&body=###%20Engine%20name%0ABerserk%0A%0A###%20Version%0A14" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:36:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13", "14"]
  y-axis "Elo Rating" 1500 --> 3900
  line "E1: STC (8.0+0.08s)" [1563, 3465]
  line "E1: LTC (60.0+0.60s)" [2915, 3688]
  line "E1: VLTC (2m24s+1.12s)" [2822, 3721]
  line "P1: STC (8.0+0.08s)" [2670, 3619]
  line "P1: LTC (60.0+0.60s)" [3008, 3761]
  line "P1: VLTC (2m24s+1.12s)" [2931, 3827]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13", "14"]
  y-axis "Elo Rating" 1600 --> 3600
  line "T1: STC (8.0+0.08s)" [1600, 3443]
  line "T1: LTC (60.0+0.60s)" [3538, 3555]
  line "T1: VLTC (2m24s+1.12s)" [3563, 3586]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 14 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3721 | 32 | 226 | 50% | 3718 | 86% |
|  |  | T1 | 3586 | 29 | 268 | 51% | 3582 | 93% |
|  |  | P1 | 3827 | 40 | 140 | 51% | 3819 | 94% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3555 | 29 | 264 | 50% | 3556 | 91% |
|  |  | P1 | 3761 | 37 | 172 | 49% | 3769 | 81% |
|  |  | E1 | 3688 | 32 | 232 | 51% | 3681 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3443 | 24 | 426 | 53% | 3372 | 76% |
|  |  | P1 | 3619 | 33 | 216 | 48% | 3632 | 78% |
|  |  | E1 | 3465 | 25 | 394 | 47% | 3486 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 13 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2822 | 229 | 4 | 88% | 2615 | 25% |
|  |  | P1 | 2931 | 170 | 8 | 75% | 2749 | 50% |
|  |  | T1 | 3563 | 13 | 1458 | 53% | 3488 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2915 | 246 | 4 | 88% | 2681 | 25% |
|  |  | T1 | 3538 | 12 | 1740 | 51% | 3534 | 87% |
|  |  | P1 | 3008 | 331 | 2 | 100% | 2743 | 0% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1563 | 138 | 28 | 75% | 1207 | 7% |
|  |  | T1 | 1600 | 15 | 1932 | 53% | 1558 | 10% |
|  |  | P1 | 2670 | 262 | 4 | 0% | 2985 | 0% |