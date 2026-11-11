# Engine: Incipit

Author: Adam Twiss

Home: https://github.com/adamtwiss/incipit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3544<sub>(+87) | 3696<sub>(+9) | 3750<sub>(+51) |  |
| 0.5.0 | 2026-10-17 | 3457 | 3687 | 3699 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3665<sub>(+71) | 3748<sub>(+37) | 3787<sub>(+49) |  |
| 0.5.0 | 2026-10-17 | 3594 | 3711 | 3738 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-10-17 | 3594 | 3711 | 3738 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Incipit+<version>&body=###%20Engine%20name%0AIncipit%0A%0A###%20Version%0A0.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-11 05:38:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3400 --> 3800
  line "E1: STC (8.0+0.08s)" [3457, 3544]
  line "E1: LTC (60.0+0.60s)" [3687, 3696]
  line "E1: VLTC (2m24s+1.12s)" [3699, 3750]
  line "P1: STC (8.0+0.08s)" [3594, 3665]
  line "P1: LTC (60.0+0.60s)" [3711, 3748]
  line "P1: VLTC (2m24s+1.12s)" [3738, 3787]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3750 | 35 | 182 | 51% | 3742 | 90% |
|  |  | P1 | 3787 | 52 | 84 | 51% | 3779 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3748 | 44 | 120 | 52% | 3737 | 82% |
|  |  | E1 | 3696 | 38 | 162 | 51% | 3692 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3665 | 44 | 124 | 52% | 3654 | 79% |
|  |  | E1 | 3544 | 31 | 250 | 49% | 3545 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3738 | 36 | 212 | 62% | 3572 | 69% |
|  |  | E1 | 3699 | 34 | 234 | 59% | 3552 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3711 | 42 | 160 | 64% | 3429 | 68% |
|  |  | E1 | 3687 | 34 | 240 | 58% | 3491 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3594 | 39 | 192 | 60% | 3347 | 64% |
|  |  | E1 | 3457 | 32 | 280 | 56% | 3297 | 62% |