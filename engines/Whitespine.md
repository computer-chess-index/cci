# Engine: Whitespine

Author: Miloslav Macůrek

Home: https://github.com/maelic13/whitespine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 676<sub>(-177) | 861<sub>(-152) | 1019<sub>(+1) |  |
| 1.3.3 | 2026-03-26 | 853<sub>(+70) | 1013<sub>(-40) | 1018<sub>(-17) |  |
| 1.3.2 | 2025-09-16 | 783<sub>(+new) | 1053<sub>(+new) | 1035<sub>(+new) |  |
| 1.3.1 | 2025-06-08 |  |  |  |  |
| 1.3.0 | 2025-05-11 |  |  |  |  |
| 1.2.0 | 2025-05-11 |  |  |  |  |
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

Generated: 2026-07-27 06:33:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.3.3", "1.4.0"]
  y-axis "Elo Rating" 600 --> 1100
  line "STC (8.0+0.08s)" [783, 853, 676]
  line "STC (8.0+0.08s)" [783, 853, 676]
  line "LTC (60.0+0.60s)" [1053, 1013, 861]
  line "VLTC (2m24s+1.12s)" [1035, 1018, 1019]
  line "VLTC (2m24s+1.12s)" [1035, 1018, 1019]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1019 | 60 | 146 | 50% | 965 | 15% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 861 | 63 | 138 | 45% | 913 | 11% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 676 | 66 | 130 | 36% | 876 | 8% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1018 | 61 | 140 | 49% | 980 | 13% |
| 1.3.3 | LTC <sub>(60.0+0.60s)</sub> | 1013 | 64 | 136 | 46% | 1003 | 12% |
| 1.3.3 | STC <sub>(8.0+0.08s)</sub> | 853 | 72 | 116 | 42% | 932 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1035 | 75 | 106 | 44% | 1157 | 13% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 1053 | 85 | 92 | 42% | 1183 | 12% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 783 | 102 | 76 | 37% | 1053 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |