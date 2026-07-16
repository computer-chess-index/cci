# Engine: Ares

Author: Charles Roberson

Home: 

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1949<sub>(+255) | 2309<sub>(+245) | 2431<sub>(+127) |  |
| 1.004 | 2009-10-31 | 1694 | 2064 | 2304 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ares+<version>&body=###%20Engine%20name%0AAres%0A%0A###%20Version%0A2.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:22:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.004", "2.5"]
  y-axis "Elo Rating" 1600 --> 2500
  line "STC (8.0+0.08s)" [1694, 1949]
  line "STC (8.0+0.08s)" [1694, 1949]
  line "LTC (60.0+0.60s)" [2064, 2309]
  line "VLTC (2m24s+1.12s)" [2304, 2431]
  line "VLTC (2m24s+1.12s)" [2304, 2431]
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
  x-axis ["1.004", "2.5"]
  y-axis "Elo Rating" 1600 --> 2500
  line "STC (8.0+0.08s)" [1694, 1949]
  line "STC (8.0+0.08s)" [1694, 1949]
  line "LTC (60.0+0.60s)" [2064, 2309]
  line "VLTC (2m24s+1.12s)" [2304, 2431]
  line "VLTC (2m24s+1.12s)" [2304, 2431]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2431 | 29 | 402 | 50% | 2433 | 25% |
| 2.5 | LTC <sub>(60.0+0.60s)</sub> | 2309 | 26 | 512 | 52% | 2288 | 25% |
| 2.5 | STC <sub>(8.0+0.08s)</sub> | 1949 | 23 | 678 | 50% | 1943 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.004 | VLTC <sub>(2m24s+1.12s)</sub> | 2304 | 45 | 176 | 47% | 2371 | 27% |
| 1.004 | LTC <sub>(60.0+0.60s)</sub> | 2064 | 79 | 60 | 49% | 2078 | 15% |
| 1.004 | STC <sub>(8.0+0.08s)</sub> | 1694 | 50 | 184 | 33% | 1991 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |