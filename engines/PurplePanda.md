# Engine: PurplePanda

Author: Jakob Steininger

Home: https://github.com/Jakob256/PurplePanda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1702<sub>(+66) | 1986<sub>(+85) | 2101<sub>(+131) |  |
| 20 | 2025-12-15 | 1636<sub>(+new) | 1901<sub>(+new) | 1970<sub>(+new) |  |
| 19 | 2024-12-28 |  |  |  |  |
| 18 | 2024-09-26 |  |  |  |  |
| 17.0 | 2024-06-20 |  |  |  |  |
| 16.0 | 2024-04-12 |  |  |  |  |
| 15.0 | 2024-03-29 |  |  |  |  |
| 14.0 | 2024-01-20 |  |  |  |  |
| 13.0 | 2023-09-04 |  |  |  |  |
| 12.0 | 2023-08-16 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PurplePanda+<version>&body=###%20Engine%20name%0APurplePanda%0A%0A###%20Version%0A21" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:27:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1600 --> 2200
  line "STC (8.0+0.08s)" [1636, 1702]
  line "STC (8.0+0.08s)" [1636, 1702]
  line "LTC (60.0+0.60s)" [1901, 1986]
  line "VLTC (2m24s+1.12s)" [1970, 2101]
  line "VLTC (2m24s+1.12s)" [1970, 2101]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1600 --> 2200
  line "STC (8.0+0.08s)" [1636, 1702]
  line "STC (8.0+0.08s)" [1636, 1702]
  line "LTC (60.0+0.60s)" [1901, 1986]
  line "VLTC (2m24s+1.12s)" [1970, 2101]
  line "VLTC (2m24s+1.12s)" [1970, 2101]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | VLTC <sub>(2m24s+1.12s)</sub> | 2101 | 48 | 158 | 52% | 2082 | 16% |
| 21 | LTC <sub>(60.0+0.60s)</sub> | 1986 | 46 | 176 | 48% | 2007 | 18% |
| 21 | STC <sub>(8.0+0.08s)</sub> | 1702 | 50 | 152 | 52% | 1677 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | VLTC <sub>(2m24s+1.12s)</sub> | 1970 | 25 | 566 | 48% | 2001 | 21% |
| 20 | LTC <sub>(60.0+0.60s)</sub> | 1901 | 25 | 580 | 50% | 1906 | 17% |
| 20 | STC <sub>(8.0+0.08s)</sub> | 1636 | 25 | 640 | 47% | 1663 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |