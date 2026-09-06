# Engine: Crafty

Author: Robert M. Hyatt

Home: https://github.com/stevemaughan/Crafty-Chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2473<sub>(-37) | 2784<sub>(+4) | 2844<sub>(-90) |  |
| 25.2.1 | 2026-06-20 | 2510 | 2780 | 2934 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Crafty+<version>&body=###%20Engine%20name%0ACrafty%0A%0A###%20Version%0A25.6.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:23:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.2.1", "25.6.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "" [2510, 2473]
  line "STC (8.0+0.08s)" [2510, 2473]
  line "LTC (60.0+0.60s)" [2780, 2784]
  line "" [2934, 2844]
  line "VLTC (2m24s+1.12s)" [2934, 2844]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2844 | 29 | 380 | 48% | 2865 | 34% |
| 25.6.1 | LTC <sub>(60.0+0.60s)</sub> | 2784 | 32 | 316 | 50% | 2778 | 30% |
| 25.6.1 | STC <sub>(8.0+0.08s)</sub> | 2473 | 31 | 340 | 51% | 2462 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2934 | 51 | 130 | 50% | 2936 | 28% |
| 25.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2780 | 56 | 112 | 49% | 2795 | 24% |
| 25.2.1 | STC <sub>(8.0+0.08s)</sub> | 2510 | 59 | 96 | 52% | 2493 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |