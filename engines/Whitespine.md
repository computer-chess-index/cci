# Engine: Whitespine

Author: Miloslav Macůrek

Home: https://github.com/maelic13/whitespine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 722<sub>(-138) | 930<sub>(-92) | 1046<sub>(+20) |  |
| 1.3.3 | 2026-03-26 | 860<sub>(+73) | 1022<sub>(-40) | 1026<sub>(-19) |  |
| 1.3.2 | 2025-09-16 | 787 | 1062 | 1045 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Whitespine+<version>&body=###%20Engine%20name%0AWhitespine%0A%0A###%20Version%0A1.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-26 06:36:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.3.3", "1.4.0"]
  y-axis "Elo Rating" 700 --> 1100
  line "STC (8.0+0.08s)" [787, 860, 722]
  line "STC (8.0+0.08s)" [787, 860, 722]
  line "LTC (60.0+0.60s)" [1062, 1022, 930]
  line "VLTC (2m24s+1.12s)" [1045, 1026, 1046]
  line "VLTC (2m24s+1.12s)" [1045, 1026, 1046]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1046 | 54 | 182 | 55% | 930 | 13% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 930 | 54 | 182 | 54% | 867 | 12% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 722 | 54 | 178 | 45% | 806 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1026 | 62 | 140 | 49% | 988 | 13% |
| 1.3.3 | LTC <sub>(60.0+0.60s)</sub> | 1022 | 64 | 136 | 46% | 1010 | 12% |
| 1.3.3 | STC <sub>(8.0+0.08s)</sub> | 860 | 73 | 116 | 42% | 938 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1045 | 75 | 106 | 44% | 1164 | 13% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 1062 | 85 | 92 | 42% | 1189 | 12% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 787 | 103 | 76 | 37% | 1060 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |