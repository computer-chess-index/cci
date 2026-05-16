# Engine: Whitespine

Author: Miloslav Macůrek

Home: https://github.com/maelic13/whitespine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 747<sub>(-121) | 913<sub>(-120) | 1121<sub>(+86) |  |
| 1.3.3 | 2026-03-26 | 868<sub>(+73) | 1033<sub>(-42) | 1035<sub>(-15) |  |
| 1.3.2 | 2025-09-16 | 795<sub>(+new) | 1075<sub>(+new) | 1050<sub>(+new) |  |
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

Generated: 2026-05-16 06:29:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.3.3", "1.4.0"]
  y-axis "Elo Rating" 700 --> 1200
  line "STC (8.0+0.08s)" [795, 868, 747]
  line "STC (8.0+0.08s)" [795, 868, 747]
  line "LTC (60.0+0.60s)" [1075, 1033, 913]
  line "VLTC (2m24s+1.12s)" [1050, 1035, 1121]
  line "VLTC (2m24s+1.12s)" [1050, 1035, 1121]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1121 | 68 | 114 | 52% | 999 | 15% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 913 | 75 | 110 | 44% | 946 | 8% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 747 | 80 | 102 | 39% | 900 | 7% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1035 | 62 | 140 | 49% | 995 | 13% |
| 1.3.3 | LTC <sub>(60.0+0.60s)</sub> | 1033 | 64 | 136 | 46% | 1018 | 12% |
| 1.3.3 | STC <sub>(8.0+0.08s)</sub> | 868 | 73 | 116 | 42% | 946 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1050 | 76 | 106 | 44% | 1175 | 13% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 1075 | 85 | 92 | 42% | 1204 | 12% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 795 | 104 | 76 | 37% | 1073 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |