# Engine: Crafty

Author: Robert M. Hyatt

Home: https://github.com/stevemaughan/Crafty-Chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2460<sub>(-39) | 2774<sub>(+5) | 2839<sub>(-81) |  |
| 25.2.1 | 2026-06-20 | 2499 | 2769 | 2920 |  |
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

Generated: 2026-08-04 06:24:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.2.1", "25.6.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "STC (8.0+0.08s)" [2499, 2460]
  line "STC (8.0+0.08s)" [2499, 2460]
  line "LTC (60.0+0.60s)" [2769, 2774]
  line "VLTC (2m24s+1.12s)" [2920, 2839]
  line "VLTC (2m24s+1.12s)" [2920, 2839]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2839 | 32 | 308 | 49% | 2853 | 33% |
| 25.6.1 | LTC <sub>(60.0+0.60s)</sub> | 2774 | 35 | 272 | 51% | 2766 | 29% |
| 25.6.1 | STC <sub>(8.0+0.08s)</sub> | 2460 | 35 | 280 | 51% | 2446 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2920 | 51 | 130 | 50% | 2924 | 28% |
| 25.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2769 | 56 | 112 | 49% | 2784 | 24% |
| 25.2.1 | STC <sub>(8.0+0.08s)</sub> | 2499 | 59 | 96 | 52% | 2481 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |