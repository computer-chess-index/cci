# Engine: Crafty

Author: Robert M. Hyatt

Home: https://github.com/stevemaughan/Crafty-Chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2471<sub>(-41) | 2781<sub>(-1) | 2851<sub>(-85) |  |
| 25.2.1 | 2026-06-20 | 2512 | 2782 | 2936 |  |
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

Generated: 2026-09-16 04:37:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.2.1", "25.6.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "" [2512, 2471]
  line "STC (8.0+0.08s)" [2512, 2471]
  line "LTC (60.0+0.60s)" [2782, 2781]
  line "" [2936, 2851]
  line "VLTC (2m24s+1.12s)" [2936, 2851]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2851 | 28 | 404 | 48% | 2867 | 35% |
| 25.6.1 | LTC <sub>(60.0+0.60s)</sub> | 2781 | 32 | 320 | 50% | 2782 | 30% |
| 25.6.1 | STC <sub>(8.0+0.08s)</sub> | 2471 | 31 | 356 | 50% | 2469 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2936 | 51 | 130 | 50% | 2939 | 28% |
| 25.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2782 | 56 | 112 | 49% | 2797 | 24% |
| 25.2.1 | STC <sub>(8.0+0.08s)</sub> | 2512 | 59 | 96 | 52% | 2495 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |