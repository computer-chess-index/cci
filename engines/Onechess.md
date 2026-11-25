# Engine: Onechess

Author: Julien Orlandini

Home: https://github.com/ovnice-dev/onechess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-11-22 | 2445<sub>(-36) | 2884<sub>(-54) | 3031<sub>(+33) |  |
| 1.0 | 2026-11-15 | 2481 | 2938 | 2998 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-11-22 | 2573<sub>(+67) | 2957<sub>(+46) | 3012<sub>(+4) |  |
| 1.0 | 2026-11-15 | 2506 | 2911 | 3008 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-11-15 | 2506 | 2911 | 3008 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onechess+<version>&body=###%20Engine%20name%0AOnechess%0A%0A###%20Version%0A1.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:40:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2"]
  y-axis "Elo Rating" 2400 --> 3100
  line "E1: STC (8.0+0.08s)" [2481, 2445]
  line "E1: LTC (60.0+0.60s)" [2938, 2884]
  line "E1: VLTC (2m24s+1.12s)" [2998, 3031]
  line "P1: STC (8.0+0.08s)" [2506, 2573]
  line "P1: LTC (60.0+0.60s)" [2911, 2957]
  line "P1: VLTC (2m24s+1.12s)" [3008, 3012]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3031 | 43 | 168 | 54% | 2997 | 39% |
|  |  | P1 | 3012 | 49 | 130 | 47% | 3033 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2884 | 26 | 516 | 57% | 2813 | 30% |
|  |  | P1 | 2957 | 94 | 36 | 50% | 2961 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2445 | 32 | 342 | 55% | 2391 | 23% |
|  |  | P1 | 2573 | 57 | 108 | 52% | 2552 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3008 | 45 | 154 | 50% | 3000 | 40% |
|  |  | E1 | 2998 | 32 | 312 | 46% | 3027 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2911 | 39 | 212 | 49% | 2900 | 31% |
|  |  | E1 | 2938 | 37 | 256 | 51% | 2916 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2506 | 40 | 216 | 48% | 2525 | 21% |
|  |  | E1 | 2481 | 37 | 260 | 50% | 2489 | 19% |