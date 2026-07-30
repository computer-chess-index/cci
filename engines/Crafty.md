# Engine: Crafty

Author: Robert M. Hyatt

Home: https://github.com/stevemaughan/Crafty-Chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2452<sub>(-48) | 2772<sub>(+2) | 2840<sub>(-81) |  |
| 25.2.1 | 2026-06-20 | 2500 | 2770 | 2921 |  |
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

Generated: 2026-07-30 06:24:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.2.1", "25.6.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "STC (8.0+0.08s)" [2500, 2452]
  line "STC (8.0+0.08s)" [2500, 2452]
  line "LTC (60.0+0.60s)" [2770, 2772]
  line "VLTC (2m24s+1.12s)" [2921, 2840]
  line "VLTC (2m24s+1.12s)" [2921, 2840]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2840 | 34 | 276 | 48% | 2857 | 33% |
| 25.6.1 | LTC <sub>(60.0+0.60s)</sub> | 2772 | 38 | 228 | 51% | 2763 | 28% |
| 25.6.1 | STC <sub>(8.0+0.08s)</sub> | 2452 | 37 | 244 | 51% | 2441 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2921 | 51 | 130 | 50% | 2925 | 28% |
| 25.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2770 | 56 | 112 | 49% | 2785 | 24% |
| 25.2.1 | STC <sub>(8.0+0.08s)</sub> | 2500 | 59 | 96 | 52% | 2483 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |